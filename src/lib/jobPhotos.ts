/**
 * Photos from Plumb-All septic and plumbing jobs, pulled from Jobber job notes
 * (2025–2026). Resized to 1400px with all metadata stripped; `sm/` holds 640px
 * copies for galleries. `town` is where the job was.
 */

export type JobPhoto = {
  slug: string;
  town: string;
  alt: string;
  width: number;
  height: number;
  smWidth: number;
  smHeight: number;
};

export const jobPhotos: JobPhoto[] = [
  { slug: 'septic-inlet-dig-jonesboro', town: 'Jonesboro', alt: 'Hand-dug access to a septic tank inlet', width: 1400, height: 1050, smWidth: 640, smHeight: 480 },
  { slug: 'septic-tank-scum-layer-jonesboro', town: 'Jonesboro', alt: 'Open septic tank showing the scum layer before pumping', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-tank-outlet-baffle-jonesboro', town: 'Jonesboro', alt: 'Septic tank opening with the baffle exposed for inspection', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-pumping-technician-jonesboro', town: 'Jonesboro', alt: 'Plumb-All technician pumping a septic tank', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-pump-truck-jonesboro', town: 'Jonesboro', alt: 'Vacuum truck hooked up for a septic pump-out', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-line-red-clay-jonesboro', town: 'Jonesboro', alt: 'Septic line exposed in red clay soil', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-tank-lid-open-jonesboro', town: 'Jonesboro', alt: 'Septic tank lid uncovered and opened', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-effluent-filter-removal-jonesboro', town: 'Jonesboro', alt: 'Removing a septic effluent filter for cleaning', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-effluent-filter-cleaning-jonesboro', town: 'Jonesboro', alt: 'Septic effluent filter pulled from the outlet for cleaning', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-tank-effluent-filter-jonesboro', town: 'Jonesboro', alt: 'Effluent filter seated in the septic tank outlet', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-tank-lids-exposed-jonesboro', town: 'Jonesboro', alt: 'Both septic tank lids dug up for service', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-yard-restored-jonesboro', town: 'Jonesboro', alt: 'Yard graded back over the septic tank after service', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-broken-baffle-jonesboro', town: 'Jonesboro', alt: 'Broken septic baffle and line found during a repair', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-tank-new-baffle-jonesboro', town: 'Jonesboro', alt: 'Septic tank with a new PVC baffle tee installed', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-new-pvc-line-jonesboro', town: 'Jonesboro', alt: 'New PVC line connected to the septic tank', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-line-repair-jonesboro-1', town: 'Jonesboro', alt: 'Replacing the line between the house and the septic tank', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-line-repair-jonesboro-2', town: 'Jonesboro', alt: 'New septic line fittings in the trench', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-cleanout-installed-jonesboro', town: 'Jonesboro', alt: 'New cleanout installed at ground level', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-repair-yard-restored-jonesboro', town: 'Jonesboro', alt: 'Yard restored after a septic line repair', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-tank-excavation-jonesboro', town: 'Jonesboro', alt: 'Septic tank excavated for a diagnostic', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-line-replacement-jonesboro', town: 'Jonesboro', alt: 'New septic line laid in the trench', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'lift-station-float-switch-jonesboro', town: 'Jonesboro', alt: 'Replacing a float switch on a sewage lift station', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-root-intrusion-hampton', town: 'Hampton', alt: 'Roots pulled out of a septic line', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-tank-trench-hampton', town: 'Hampton', alt: 'Septic tank and outlet trench opened for repair', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-outlet-baffle-replaced-hampton', town: 'Hampton', alt: 'New outlet baffle tee in a septic tank', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-new-outlet-pipe-hampton', town: 'Hampton', alt: 'New PVC outlet pipe leaving the septic tank', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-baffle-tee-install-hampton', town: 'Hampton', alt: 'Installing a baffle tee inside the septic tank', width: 1400, height: 1050, smWidth: 640, smHeight: 480 },
  { slug: 'septic-outlet-line-gravel-hampton-1', town: 'Hampton', alt: 'New outlet line bedded in gravel', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-outlet-line-gravel-hampton-2', town: 'Hampton', alt: 'New septic outlet line ready to backfill', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-inlet-tee-hampton-1', town: 'Hampton', alt: 'Septic tank inlet tee being cleared', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-inlet-tee-hampton-2', town: 'Hampton', alt: 'Inlet tee and line at the septic tank', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-tank-interior-hampton-1', town: 'Hampton', alt: 'Inside a septic tank during service', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-tank-interior-hampton-2', town: 'Hampton', alt: 'Septic tank inlet after cleaning', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-line-trench-hampton', town: 'Hampton', alt: 'Septic line exposed in a trench', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-tank-damaged-inlet-hampton-1', town: 'Hampton', alt: 'Damaged inlet pipe found inside a septic tank', width: 1400, height: 1050, smWidth: 640, smHeight: 480 },
  { slug: 'septic-tank-damaged-inlet-hampton-2', town: 'Hampton', alt: 'Corroded inlet line at the septic tank', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-tank-damaged-inlet-hampton-3', town: 'Hampton', alt: 'Broken septic tank opening and inlet', width: 1400, height: 1050, smWidth: 640, smHeight: 480 },
  { slug: 'sewer-camera-inspection-1', town: 'Hampton', alt: 'Sewer camera inspection of a main line', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'sewer-camera-inspection-2', town: 'Hampton', alt: 'Camera view inside a sewer line', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'sewer-camera-inspection-3', town: 'Hampton', alt: 'Sewer camera monitor during a line inspection', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'sewer-camera-inspection-4', town: 'Hampton', alt: 'Locating a problem with a sewer camera', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-riser-lid-mcdonough-1', town: 'McDonough', alt: 'Septic riser lid at ground level', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-riser-install-mcdonough-1', town: 'McDonough', alt: 'Septic pump chamber riser during installation', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-riser-install-mcdonough-2', town: 'McDonough', alt: 'New riser set on a septic pump chamber', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-risers-mcdonough', town: 'McDonough', alt: 'Septic risers with lids at ground level', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'old-septic-pump-mcdonough', town: 'McDonough', alt: 'Failed septic pump removed from the pump chamber', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-pump-chamber-mcdonough', town: 'McDonough', alt: 'New pump installed in a septic pump chamber', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-pump-replacement-mcdonough', town: 'McDonough', alt: 'Technician wiring a new septic pump', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-risers-yard-mcdonough', town: 'McDonough', alt: 'Septic risers finished flush with the yard', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-riser-lid-mcdonough-2', town: 'McDonough', alt: 'Finished septic riser lid', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-tank-dig-mcdonough', town: 'McDonough', alt: 'Septic tank lid dug up for maintenance', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-excavation-mcdonough', town: 'McDonough', alt: 'Septic tank access dug and taped off for safety', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-pumping-mcdonough-1', town: 'McDonough', alt: 'Pumping a septic tank', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-pumping-mcdonough-2', town: 'McDonough', alt: 'Vacuum hose in the septic tank during pumping', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'sink-drain-repair-mcdonough', town: 'McDonough', alt: 'New sink drain and trap', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'water-heater-mcdonough', town: 'McDonough', alt: 'Electric water heater service', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'tub-valve-repair-mcdonough', town: 'McDonough', alt: 'Tub and shower valve after repair', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'kitchen-faucet-install-mcdonough', town: 'McDonough', alt: 'New kitchen faucet installed', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-pump-line-repair-stockbridge-1', town: 'Stockbridge', alt: 'Repairing a septic pump line', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-pump-line-repair-stockbridge-2', town: 'Stockbridge', alt: 'Septic pump line exposed for repair', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'septic-pump-line-repair-stockbridge-3', town: 'Stockbridge', alt: 'Repaired septic pump line in the trench', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'main-water-shut-off-ball-valve-hampton', town: 'Hampton', alt: 'Red-lever ball valve and pressure-reducing valve on the main water line, behind a wall access panel', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'gate-valve-wheel-handle-rex', town: 'Rex', alt: 'Older gate valve with a round wheel handle', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'gate-valve-copper-line-jonesboro', town: 'Jonesboro', alt: 'Gate valve on a copper water line next to the water heater', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'pressure-reducing-valve-jonesboro', town: 'Jonesboro', alt: 'Pressure-reducing valve on the main water line', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'toilet-shut-off-valve-old-atlanta', town: 'Atlanta', alt: 'Old toilet shut-off valve and supply line', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'toilet-shut-off-valve-new-atlanta', town: 'Atlanta', alt: 'New quarter-turn toilet shut-off valve and braided supply line', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'sewer-line-cleanout-atlanta', town: 'Atlanta', alt: 'New sewer line with a cleanout riser in the trench', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'sewer-line-repair-dig-atlanta', town: 'Atlanta', alt: 'Sewer line exposed for repair', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'sewer-line-new-pvc-jonesboro', town: 'Jonesboro', alt: 'New PVC sewer pipe tied into the existing line', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'sewer-line-trench-cleanout-jonesboro', town: 'Jonesboro', alt: 'Sewer line replacement trench with a new cleanout', width: 1400, height: 1157, smWidth: 640, smHeight: 529 },
  { slug: 'sewer-line-new-pipe-jonesboro', town: 'Jonesboro', alt: 'New sewer pipe bedded in the trench', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'building-drain-replacement-jonesboro-1', town: 'Jonesboro', alt: 'New PVC building drain under the house', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
  { slug: 'building-drain-replacement-jonesboro-2', town: 'Jonesboro', alt: 'New drain fittings in the crawl space', width: 1050, height: 1400, smWidth: 480, smHeight: 640 },
];

export function getJobPhoto(slug: string): JobPhoto | undefined {
  return jobPhotos.find((photo) => photo.slug === slug);
}
