import{S as t}from"./Viewer-9f77fc9e.js";const e="logDepthVertex",r="#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";t.IncludesShadersStoreWGSL[e]=r;
