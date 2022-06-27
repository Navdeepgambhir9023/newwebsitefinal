const canvas = document.getElementById('renderSurface');
const rFluid = new Fluid(canvas);

rFluid.mapBehaviors({
  paused: false,
  dissipation: .96,
  velocity: .98,
  pressure: .8,
  curl: 9,
  pressure_iteration: 15,
  emitter_size: 0.4,
})
rFluid.activate();
