import { roles } from "../data/roles";

const el = document.getElementById("role")!;

if (el) {
  let roleIndex = 0;

  const sleep = (ms: number) =>
    new Promise((r) => setTimeout(r, ms));

  async function type(text: string) {
    for (let i = 0; i < text.length; i++) {
      el.textContent += text[i];
      await sleep(80);
    }
  }

  async function erase() {
    while (el.textContent!.length > 0) {
      el.textContent = el.textContent!.slice(0, -1);
      await sleep(50);
    }
  }

  async function loop() {
    while (true) {
      const current = roles[roleIndex];

      await type(current);
      await sleep(1200);
      await erase();

      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  loop();
}