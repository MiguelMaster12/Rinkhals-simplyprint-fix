import{S as e}from"./Viewer-9f77fc9e.js";import"./kernelBlurVaryingDeclaration-7746d8d1.js";import"./index-8adf53f4.js";import"./vuetify-f4a6879d.js";import"./overlayscrollbars-44d87bcf.js";import"./echarts-ff51454d.js";import"./codemirror-0a1db0c7.js";const n="kernelBlurVertex",o="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";e.IncludesShadersStore[n]=o;const r="kernelBlurVertexShader",t="attribute vec2 position;uniform vec2 delta;varying vec2 sampleCenter;\n#include<kernelBlurVaryingDeclaration>[0..varyingCount]\nconst vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nsampleCenter=(position*madd+madd);\n#include<kernelBlurVertex>[0..varyingCount]\ngl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";e.ShadersStore[r]=t;const p={name:r,shader:t};export{p as kernelBlurVertexShader};
