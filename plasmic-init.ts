import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "nnznjoc99bodKx7ncsBowx";
export const projectApiToken = "yPU2i9NczMP388ruOnN518jYi3lBXwFe0p5QwJyAaGFYzFXXDM6vMkgtxEV0BFkC8kieTxtN8tFUbcTfXxMg";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
