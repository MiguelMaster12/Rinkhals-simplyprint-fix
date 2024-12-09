import{S as n}from"./Viewer-9f77fc9e.js";import"./clipPlaneVertex-26b88f21.js";import"./logDepthDeclaration-a183794d.js";import"./logDepthVertex-e59f6660.js";import"./index-8adf53f4.js";import"./vuetify-f4a6879d.js";import"./overlayscrollbars-44d87bcf.js";import"./echarts-ff51454d.js";import"./codemirror-0a1db0c7.js";const e="lineVertexShader",i="#define ADDITIONAL_VERTEX_DECLARATION\n#include<instancesDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute position: vec3f;attribute normal: vec4f;uniform width: f32;uniform aspectRatio: f32;\n#include<logDepthDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\nvar worldViewProjection: mat4x4f=scene.viewProjection*finalWorld;var viewPosition: vec4f=worldViewProjection* vec4f(input.position,1.0);var viewPositionNext: vec4f=worldViewProjection* vec4f(input.normal.xyz,1.0);var currentScreen: vec2f=viewPosition.xy/viewPosition.w;var nextScreen: vec2f=viewPositionNext.xy/viewPositionNext.w;currentScreen=vec2f(currentScreen.x*uniforms.aspectRatio,currentScreen.y);nextScreen=vec2f(nextScreen.x*uniforms.aspectRatio,nextScreen.y);var dir: vec2f=normalize(nextScreen-currentScreen);var normalDir: vec2f= vec2f(-dir.y,dir.x);normalDir*=uniforms.width/2.0;normalDir=vec2f(normalDir.x/uniforms.aspectRatio,normalDir.y);var offset: vec4f= vec4f(normalDir*input.normal.w,0.0,0.0);vertexOutputs.position=viewPosition+offset;\n#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nvar worldPos: vec4f=finalWorld*vec4f(input.position,1.0);\n#include<clipPlaneVertex>\n#endif\n#include<logDepthVertex>\n#define CUSTOM_VERTEX_MAIN_END\n}";n.ShadersStoreWGSL[e]=i;const v={name:e,shader:i};export{v as lineVertexShaderWGSL};
