import {promises as fs} from "fs";
import path from "path";
import {exec} from "node:child_process";

async function generateOgImages() {
  console.log('Starting OG image generation...');

  try {
    // Create the og-images directory in public if it doesn't exist
    const ogImagesDir = path.join(process.cwd(), 'public', 'og-images');
    try {
      await fs.mkdir(ogImagesDir, { recursive: true });
      console.log('Created og-images directory');
    } catch (err) {
      console.log('og-images directory already exists');
    }

    // Create a temporary Next.js API route to generate the images
    const tempScriptPath = path.join(process.cwd(), 'src', 'app', 'api', 'generate-og-temp', 'route.ts');
    const tempScriptDir = path.dirname(tempScriptPath);

    try {
      await fs.mkdir(tempScriptDir, { recursive: true });
    } catch (err) {
      console.log('Temp directory already exists');
    }

    // Write the temporary script
    const tempScript = `
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { getAllOgImageConfigs, generateOgImage, getOgImageFilename } from '@/lib/og-image';

export async function GET() {
  try {
    const configs = await getAllOgImageConfigs();
    const results = [];

    for (const config of configs) {
      try {
        const image = await generateOgImage(config);
        const buffer = await image.arrayBuffer();
        const filename = getOgImageFilename(config);
        const filePath = path.join(process.cwd(), 'public', 'og-images', filename);

        await fs.writeFile(filePath, Buffer.from(buffer));

        results.push({
          title: config.title,
          image: config.image,
          outputPath: \`/og-images/\${filename}\`,
          success: true
        });
      } catch (error) {
        results.push({
          title: config.title,
          image: config.image,
          error: error.message,
          success: false
        });
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'OG images generated',
      count: results.length,
      results 
    });
  } catch (error) {
    console.error('Error generating OG images:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
`;

    await fs.writeFile(tempScriptPath, tempScript);
    console.log('Created temporary API route for OG image generation');

    // Start a Next.js dev server in the background with custom config
    const min_port = 10000;
    const max_port = 15000;
    const random_port = Math.floor(Math.random() * (max_port - min_port) + min_port);
    console.log(`Starting Next.js dev server with custom config (port ${random_port})...`);
    const serverProcess = exec(`npx next dev --port ${random_port}`);

    // Define function to kill the server process
    const killServer = () => {
      if (serverProcess && !serverProcess.killed) {
        console.log('Terminating Next.js server...');
        serverProcess.kill();
      }
    };

    // Set up cleanup handlers
    process.on('exit', killServer);
    process.on('SIGINT', () => {
      killServer();
      process.exit(0);
    });
    process.on('SIGTERM', () => {
      killServer();
      process.exit(0);
    });

    // Wait for the server to start
    console.log('Waiting for server to start...');
    let serverOnline = false;
    while (!serverOnline) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        try {
            const onlineTestResult = await fetch(`http://localhost:${random_port}`);
            if (onlineTestResult.status === 200) {
                serverOnline = true;
                console.log('\tServer online!');
            } else {
                console.log('\tServer still not online...');
            }
        } catch (err) {
            console.log('\tServer still not online...');
        }
    }

    // Call the API to generate the images
    console.log('Calling API to generate OG images...');
    const response = await fetch(`http://localhost:${random_port}/api/generate-og-temp`);
    const result = await response.json();

    console.log(`Generated ${result.count} OG images`);

    if (result.results) {
      const failures = result.results.filter(r => !r.success);
      if (failures.length > 0) {
        console.error(`Failed to generate ${failures.length} images:`);
        failures.forEach(f => console.error(`- ${f.title} (${f.image}): ${f.error}`));
      }
    }

    // Clean up the temporary API route
    await fs.rm(tempScriptDir, { recursive: true, force: true });
    console.log('Cleaned up temporary API route');

    // Explicitly terminate the server
    killServer();
    console.log('OG image generation complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error in OG image generation script:', error);
    process.exit(1);
  }
}

generateOgImages();
