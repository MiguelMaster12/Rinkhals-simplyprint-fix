import{S as e}from"./Viewer-9f77fc9e.js";const o="vertexColorMixing",r="#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=color;\n#else\nvColor.rgb*=color.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#endif\n";e.IncludesShadersStore[o]=r;
