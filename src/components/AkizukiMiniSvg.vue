<template>
  <div class="container mx-auto flex px-5 py-10 lg:flex-row flex-col items-center">
    <div class="lg:mb-0 mb-5">
      <svg width="496.229" height="304.702" viewBox="0 0 131.294 80.619">
        <path fill="#bec8b7" d="M0 0h131.294v80.619H0z"/>
        <path d="M13.43 49.202l-3.344 2.536 2.884 2.723h5.034l3.36-2.723-2.9-2.536z" @click="toggle(134)" v-bind:opacity="segments[134] ? 1 : 0.1"/>
        <path d="M9.535 52.141l-1.836 1.397-1.2 13.728h5.352l.941-10.774.103-1.176z" @click="toggle(84)" v-bind:opacity="segments[84] ? 1 : 0.1"/>
        <path d="M21.844 52.142l-3.915 3.174-.103 1.176-.941 10.774-.016.181-.048.549-.011.125h-.013a.975.975 0 01-.178.37l3.575 5.36c.874-.654 1.486-1.658 1.585-2.79l1.54-17.625z" @click="toggle(64)" v-bind:opacity="segments[64] ? 1 : 0.1"/>
        <path d="M6.425 68.121l-.257 2.94c-.173 1.978 1.281 3.572 3.26 3.572h8.467c.6 0 1.175-.149 1.693-.408l-3.572-5.355a.871.871 0 01-.162.015h-3.256a.794.794 0 01-.809-.764h-.013z" @click="toggle(34)" v-bind:opacity="segments[34] ? 1 : 0.1"/>
        <path d="M9.67 33.16c-.153.36-.255.743-.29 1.144L8.027 49.793l1.587 1.498 3.89-2.944.959-10.968-4.793-4.22z" @click="toggle(168)" v-bind:opacity="segments[168] ? 1 : 0.1"/>
        <path d="M23.363 31.144l-3.833 5.608h.021l-.043.496-.012.13-.958 10.969 3.376 2.944 1.713-1.388 1.364-15.599c.12-1.375-.547-2.562-1.628-3.16z" @click="toggle(114)" v-bind:opacity="segments[114] ? 1 : 0.1"/>
        <path d="M13.264 30.732c-1.333 0-2.552.725-3.26 1.802l4.789 4.218h3.882l4.02-5.882a3.457 3.457 0 00-.964-.138z" @click="toggle(164)" v-bind:opacity="segments[164] ? 1 : 0.1"/>
        <path d="M21.87 73.031q0-.576.471-.978.472-.4 1.18-.4.648 0 1.149.45.53.452.53 1.054 0 .727-.677 1.705-.678.978-1.445 1.455l-.678-.401q.325-.402.59-.778.265-.351.383-.627-.766-.025-1.15-.426-.353-.427-.353-1.054z" @click="toggle(30)" v-bind:opacity="segments[30] ? 1 : 0.1"/>
        <path d="M32.974 49.202l-3.344 2.536 2.884 2.723h5.034l3.36-2.723-2.9-2.536z" @click="toggle(110)" v-bind:opacity="segments[110] ? 1 : 0.1"/>
        <path d="M29.08 52.141l-1.836 1.397-1.2 13.728h5.351l.942-10.774.103-1.176z" @click="toggle(60)" v-bind:opacity="segments[60] ? 1 : 0.1"/>
        <path d="M41.388 52.142l-3.915 3.174-.102 1.176-.942 10.774-.016.181-.048.549-.01.125h-.014a.975.975 0 01-.177.37l3.574 5.36c.875-.654 1.486-1.658 1.585-2.79l1.54-17.625z" @click="toggle(55)" v-bind:opacity="segments[55] ? 1 : 0.1"/>
        <path d="M25.97 68.121l-.257 2.94c-.173 1.978 1.28 3.572 3.26 3.572h8.466c.6 0 1.176-.149 1.693-.408l-3.571-5.355a.871.871 0 01-.162.015h-3.256a.794.794 0 01-.81-.764h-.012z" @click="toggle(10)" v-bind:opacity="segments[10] ? 1 : 0.1"/>
        <path d="M29.214 33.16c-.153.36-.254.743-.29 1.144l-1.353 15.489 1.587 1.498 3.89-2.944.96-10.968-4.794-4.22z" @click="toggle(144)" v-bind:opacity="segments[144] ? 1 : 0.1"/>
        <path d="M42.907 31.144l-3.832 5.608h.02l-.043.496-.011.13-.959 10.969 3.376 2.944 1.714-1.388 1.363-15.599c.12-1.375-.546-2.562-1.628-3.16z" @click="toggle(89)" v-bind:opacity="segments[89] ? 1 : 0.1"/>
        <path d="M32.809 30.732c-1.333 0-2.553.725-3.26 1.802l4.788 4.218h3.882l4.021-5.882a3.457 3.457 0 00-.964-.138z" @click="toggle(139)" v-bind:opacity="segments[139] ? 1 : 0.1"/>
        <path d="M51.725 49.202l-3.344 2.536 2.884 2.723H56.3l3.36-2.723-2.9-2.536z" @click="toggle(133)" v-bind:opacity="segments[133] ? 1 : 0.1"/>
        <path d="M47.83 52.141l-1.835 1.397-1.2 13.728h5.351l.942-10.774.102-1.176z" @click="toggle(83)" v-bind:opacity="segments[83] ? 1 : 0.1"/>
        <path d="M60.14 52.142l-3.916 3.174-.103 1.176-.941 10.774-.016.181-.048.549-.01.125h-.014a.975.975 0 01-.177.37l3.574 5.36c.874-.654 1.486-1.658 1.585-2.79l1.54-17.625z" @click="toggle(79)" v-bind:opacity="segments[79] ? 1 : 0.1"/>
        <path d="M44.72 68.121l-.257 2.94c-.173 1.978 1.281 3.572 3.26 3.572h8.467c.6 0 1.175-.149 1.693-.408l-3.571-5.355a.871.871 0 01-.162.015h-3.256a.794.794 0 01-.81-.764h-.013z" @click="toggle(33)" v-bind:opacity="segments[33] ? 1 : 0.1"/>
        <path d="M47.965 33.16c-.153.36-.254.743-.29 1.144l-1.353 15.489 1.587 1.498 3.89-2.944.959-10.968-4.793-4.22z" @click="toggle(183)" v-bind:opacity="segments[183] ? 1 : 0.1"/>
        <path d="M61.658 31.144l-3.833 5.608h.022l-.044.496-.011.13-.959 10.969 3.376 2.944 1.714-1.388 1.363-15.599c.12-1.375-.547-2.562-1.628-3.16z" @click="toggle(113)" v-bind:opacity="segments[113] ? 1 : 0.1"/>
        <path d="M51.56 30.732c-1.334 0-2.553.725-3.261 1.802l4.79 4.218h3.881l4.02-5.882a3.457 3.457 0 00-.964-.138z" @click="toggle(163)" v-bind:opacity="segments[163] ? 1 : 0.1"/>
        <path d="M70.476 49.202l-3.344 2.536 2.884 2.723h5.034l3.36-2.723-2.9-2.536z" @click="toggle(109)" v-bind:opacity="segments[109] ? 1 : 0.1"/>
        <path d="M66.58 52.141l-1.835 1.397-1.2 13.728h5.352l.941-10.774.103-1.176z" @click="toggle(59)" v-bind:opacity="segments[59] ? 1 : 0.1"/>
        <path d="M78.89 52.142l-3.915 3.174-.103 1.176-.941 10.774-.016.181-.048.549-.011.125h-.013a.975.975 0 01-.178.37l3.575 5.36c.874-.654 1.486-1.658 1.585-2.79l1.54-17.625z" @click="toggle(54)" v-bind:opacity="segments[54] ? 1 : 0.1"/>
        <path d="M63.471 68.121l-.257 2.94c-.173 1.978 1.281 3.572 3.26 3.572h8.467c.6 0 1.175-.149 1.693-.408l-3.572-5.355a.871.871 0 01-.162.015h-3.256a.794.794 0 01-.809-.764h-.013z" @click="toggle(9)" v-bind:opacity="segments[9] ? 1 : 0.1"/>
        <path d="M66.715 33.16c-.152.36-.254.743-.289 1.144l-1.353 15.489 1.587 1.498 3.89-2.944.959-10.968-4.794-4.22z" @click="toggle(159)" v-bind:opacity="segments[159] ? 1 : 0.1"/>
        <path d="M80.409 31.144l-3.833 5.608h.021l-.043.496-.011.13-.959 10.969 3.376 2.944 1.714-1.388 1.363-15.599c.12-1.375-.547-2.562-1.628-3.16z" @click="toggle(88)" v-bind:opacity="segments[88] ? 1 : 0.1"/>
        <path d="M70.31 30.732c-1.333 0-2.552.725-3.26 1.802l4.789 4.218h3.882l4.02-5.882a3.457 3.457 0 00-.964-.138z" @click="toggle(138)" v-bind:opacity="segments[138] ? 1 : 0.1"/>
        <path d="M101.308 46.28a.806.806 0 01-.806.806.806.806 0 01-.806-.806.806.806 0 01.806-.807.806.806 0 01.806.807z" @click="toggle(22)" v-bind:opacity="segments[22] ? 1 : 0.1"/>
        <path d="M96.307 37.265l-1.214.92 1.047.99h1.828l1.22-.99-1.053-.92z" @click="toggle(126)" v-bind:opacity="segments[126] ? 1 : 0.1"/>
        <path d="M94.893 38.332l-.667.508-.435 4.985h1.943l.342-3.913.037-.427z" @click="toggle(76)" v-bind:opacity="segments[76] ? 1 : 0.1"/>
        <path d="M99.363 38.333l-1.422 1.152-.037.427-.342 3.913-.006.066-.018.199-.004.045h-.005a.353.353 0 01-.064.135l1.298 1.946a1.43 1.43 0 00.575-1.013l.56-6.4z" @click="toggle(56)" v-bind:opacity="segments[56] ? 1 : 0.1"/>
        <path d="M93.763 44.135l-.093 1.068a1.167 1.167 0 001.184 1.297h3.075c.217 0 .426-.054.614-.148l-1.296-1.945a.287.287 0 01-.06.005h-1.182a.288.288 0 01-.294-.277h-.005z" @click="toggle(26)" v-bind:opacity="segments[26] ? 1 : 0.1"/>
        <path d="M94.941 31.44c-.055.13-.092.27-.104.415l-.492 5.624.577.545 1.412-1.07.348-3.983-1.74-1.532z" @click="toggle(160)" v-bind:opacity="segments[160] ? 1 : 0.1"/>
        <path d="M99.914 30.707l-1.391 2.037h.007l-.015.18-.004.047-.348 3.983 1.226 1.07.622-.505.495-5.664a1.17 1.17 0 00-.591-1.148z" @click="toggle(106)" v-bind:opacity="segments[106] ? 1 : 0.1"/>
        <path d="M96.247 30.558c-.484 0-.927.263-1.184.654l1.74 1.532h1.409l1.46-2.136a1.254 1.254 0 00-.35-.05z" @click="toggle(156)" v-bind:opacity="segments[156] ? 1 : 0.1"/>
        <path d="M104.365 37.265l-1.215.92 1.048.99h1.828l1.22-.99-1.053-.92z" @click="toggle(101)" v-bind:opacity="segments[101] ? 1 : 0.1"/>
        <path d="M102.95 38.332l-.666.508-.436 4.985h1.943l.342-3.913.038-.427z" @click="toggle(51)" v-bind:opacity="segments[51] ? 1 : 0.1"/>
        <path d="M107.42 38.333L106 39.485l-.038.427-.342 3.913-.006.066-.017.199-.004.045h-.005a.353.353 0 01-.065.135l1.298 1.946a1.43 1.43 0 00.576-1.013l.56-6.4z" @click="toggle(95)" v-bind:opacity="segments[95] ? 1 : 0.1"/>
        <path d="M101.82 44.135l-.092 1.068a1.167 1.167 0 001.183 1.297h3.075c.218 0 .427-.054.615-.148l-1.297-1.945a.287.287 0 01-.059.005h-1.182a.288.288 0 01-.294-.277h-.005z" @click="toggle(1)" v-bind:opacity="segments[1] ? 1 : 0.1"/>
        <path d="M102.999 31.44c-.055.13-.092.27-.105.415l-.491 5.625.576.544 1.413-1.07.348-3.983-1.741-1.532z" @click="toggle(151)" v-bind:opacity="segments[151] ? 1 : 0.1"/>
        <path d="M107.972 30.707l-1.392 2.037h.008l-.016.18-.004.047-.348 3.983 1.226 1.07.623-.505.494-5.664a1.17 1.17 0 00-.59-1.148h-.001z" @click="toggle(129)" v-bind:opacity="segments[129] ? 1 : 0.1"/>
        <path d="M104.305 30.558c-.485 0-.927.263-1.184.654l1.739 1.532h1.41l1.46-2.136a1.254 1.254 0 00-.35-.05z" @click="toggle(179)" v-bind:opacity="segments[179] ? 1 : 0.1"/>
        <path d="M112.422 37.265l-1.214.92 1.047.99h1.828l1.22-.99-1.053-.92z" @click="toggle(118)" v-bind:opacity="segments[118] ? 1 : 0.1"/>
        <path d="M111.008 38.332l-.667.508-.435 4.985h1.943l.342-3.913.037-.427z" @click="toggle(68)" v-bind:opacity="segments[68] ? 1 : 0.1"/>
        <path d="M115.478 38.333l-1.422 1.152-.037.427-.342 3.913-.006.066-.018.199-.004.045h-.005a.353.353 0 01-.064.135l1.298 1.946a1.43 1.43 0 00.575-1.013l.56-6.4z" @click="toggle(72)" v-bind:opacity="segments[72] ? 1 : 0.1"/>
        <path d="M109.878 44.135l-.093 1.068a1.167 1.167 0 001.184 1.297h3.074c.218 0 .427-.054.615-.148l-1.297-1.945a.287.287 0 01-.058.005h-1.183a.288.288 0 01-.294-.277h-.005z" @click="toggle(18)" v-bind:opacity="segments[18] ? 1 : 0.1"/>
        <path d="M111.057 31.44c-.056.13-.093.27-.106.415l-.491 5.625.577.544 1.412-1.07.348-3.983-1.74-1.532z" @click="toggle(152)" v-bind:opacity="segments[152] ? 1 : 0.1"/>
        <path d="M116.03 30.707l-1.393 2.037h.008l-.015.18-.004.047-.348 3.983 1.226 1.07.622-.505.495-5.664a1.17 1.17 0 00-.591-1.148z" @click="toggle(122)" v-bind:opacity="segments[122] ? 1 : 0.1"/>
        <path d="M112.362 30.558c-.484 0-.927.263-1.184.654l1.74 1.532h1.409l1.46-2.136a1.254 1.254 0 00-.35-.05z" @click="toggle(172)" v-bind:opacity="segments[172] ? 1 : 0.1"/>
        <path d="M120.48 37.265l-1.215.92 1.048.99h1.828l1.22-.99-1.054-.92z" @click="toggle(142)" v-bind:opacity="segments[142] ? 1 : 0.1"/>
        <path d="M119.065 38.332l-.666.508-.436 4.985h1.943l.342-3.913.037-.427z" @click="toggle(92)" v-bind:opacity="segments[92] ? 1 : 0.1"/>
        <path d="M123.535 38.333l-1.422 1.152-.037.427-.342 3.913-.006.066-.017.199-.004.045h-.005a.353.353 0 01-.065.135l1.298 1.946a1.43 1.43 0 00.576-1.013l.56-6.4z" @click="toggle(48)" v-bind:opacity="segments[48] ? 1 : 0.1"/>
        <path d="M117.936 44.135l-.094 1.068a1.167 1.167 0 001.184 1.297h3.075c.218 0 .427-.054.615-.148l-1.297-1.945a.287.287 0 01-.059.005h-1.182a.288.288 0 01-.294-.277h-.005z" @click="toggle(42)" v-bind:opacity="segments[42] ? 1 : 0.1"/>
        <path d="M119.114 31.44c-.055.13-.093.27-.105.415l-.492 5.625.577.544 1.412-1.07.349-3.983-1.74-1.532z" @click="toggle(176)" v-bind:opacity="segments[176] ? 1 : 0.1"/>
        <path d="M124.087 30.707l-1.392 2.037h.008l-.016.18-.004.047-.348 3.983 1.226 1.07.623-.505.494-5.664a1.17 1.17 0 00-.59-1.148h-.001z" @click="toggle(98)" v-bind:opacity="segments[98] ? 1 : 0.1"/>
        <path d="M120.42 30.558c-.485 0-.928.263-1.185.654l1.74 1.532h1.41l1.46-2.136a1.254 1.254 0 00-.35-.05z" @click="toggle(148)" v-bind:opacity="segments[148] ? 1 : 0.1"/>
        <path d="M101.308 66.388a.806.806 0 01-.806.806.806.806 0 01-.806-.806.806.806 0 01.806-.806.806.806 0 01.806.806z" @click="toggle(21)" v-bind:opacity="segments[21] ? 1 : 0.1"/>
        <path d="M96.307 57.373l-1.214.921 1.047.989h1.828l1.22-.989-1.053-.92z" @click="toggle(125)" v-bind:opacity="segments[125] ? 1 : 0.1"/>
        <path d="M94.893 58.44l-.667.508-.435 4.985h1.943l.342-3.912.037-.428z" @click="toggle(75)" v-bind:opacity="segments[75] ? 1 : 0.1"/>
        <path d="M99.363 58.44l-1.422 1.153-.037.428-.342 3.912-.006.066-.018.2-.004.045h-.005a.353.353 0 01-.064.134l1.298 1.946a1.43 1.43 0 00.575-1.013l.56-6.4z" @click="toggle(71)" v-bind:opacity="segments[71] ? 1 : 0.1"/>
        <path d="M93.763 64.244l-.093 1.067a1.167 1.167 0 001.184 1.297h3.075c.217 0 .426-.054.614-.148l-1.296-1.945a.287.287 0 01-.06.005h-1.182a.288.288 0 01-.294-.277h-.005z" @click="toggle(25)" v-bind:opacity="segments[25] ? 1 : 0.1"/>
        <path d="M94.941 51.548c-.055.13-.092.27-.104.415l-.492 5.625.577.544 1.412-1.07.348-3.983-1.74-1.531z" @click="toggle(175)" v-bind:opacity="segments[175] ? 1 : 0.1"/>
        <path d="M99.914 50.816l-1.391 2.036h.007l-.015.18-.004.047-.348 3.984 1.226 1.069.622-.505.495-5.664a1.17 1.17 0 00-.591-1.147z" @click="toggle(105)" v-bind:opacity="segments[105] ? 1 : 0.1"/>
        <path d="M96.247 50.666c-.484 0-.927.263-1.184.654l1.74 1.532h1.409l1.46-2.136a1.257 1.257 0 00-.35-.05z" @click="toggle(155)" v-bind:opacity="segments[155] ? 1 : 0.1"/>
        <path d="M104.365 57.373l-1.215.921 1.048.989h1.828l1.22-.989-1.053-.92z" @click="toggle(100)" v-bind:opacity="segments[100] ? 1 : 0.1"/>
        <path d="M102.95 58.44l-.666.508-.436 4.985h1.943l.342-3.912.038-.428z" @click="toggle(50)" v-bind:opacity="segments[50] ? 1 : 0.1"/>
        <path d="M107.42 58.44L106 59.594l-.038.428-.342 3.912-.006.066-.017.2-.004.045h-.005a.353.353 0 01-.065.134l1.298 1.946a1.43 1.43 0 00.576-1.013l.56-6.4z" @click="toggle(94)" v-bind:opacity="segments[94] ? 1 : 0.1"/>
        <path d="M101.82 64.244l-.092 1.067a1.167 1.167 0 001.183 1.297h3.075c.218 0 .427-.054.615-.148l-1.297-1.945a.287.287 0 01-.059.005h-1.182a.288.288 0 01-.294-.277h-.005z" @click="toggle(0)" v-bind:opacity="segments[0] ? 1 : 0.1"/>
        <path d="M102.999 51.548c-.055.13-.092.27-.105.415l-.491 5.625.576.544 1.413-1.07.348-3.983-1.741-1.531z" @click="toggle(150)" v-bind:opacity="segments[150] ? 1 : 0.1"/>
        <path d="M107.972 50.816l-1.392 2.036h.008l-.016.18-.004.047-.348 3.984 1.226 1.069.623-.505.494-5.664a1.17 1.17 0 00-.59-1.147h-.001z" @click="toggle(128)" v-bind:opacity="segments[128] ? 1 : 0.1"/>
        <path d="M104.305 50.666c-.485 0-.927.263-1.184.654l1.739 1.532h1.41l1.46-2.136a1.257 1.257 0 00-.35-.05z" @click="toggle(178)" v-bind:opacity="segments[178] ? 1 : 0.1"/>
        <path d="M112.422 57.373l-1.214.921 1.047.989h1.828l1.22-.989-1.053-.92z" @click="toggle(124)" v-bind:opacity="segments[124] ? 1 : 0.1"/>
        <path d="M111.008 58.44l-.667.508-.435 4.985h1.943l.342-3.912.037-.428z" @click="toggle(74)" v-bind:opacity="segments[74] ? 1 : 0.1"/>
        <path d="M115.478 58.44l-1.422 1.153-.037.428-.342 3.912-.006.066-.018.2-.004.045h-.005a.353.353 0 01-.064.134l1.298 1.946a1.43 1.43 0 00.575-1.013l.56-6.4z" @click="toggle(70)" v-bind:opacity="segments[70] ? 1 : 0.1"/>
        <path d="M109.878 64.244l-.093 1.067a1.167 1.167 0 001.184 1.297h3.074c.218 0 .427-.054.615-.148l-1.297-1.945a.287.287 0 01-.058.005h-1.183a.288.288 0 01-.294-.277h-.005z" @click="toggle(24)" v-bind:opacity="segments[24] ? 1 : 0.1"/>
        <path d="M111.057 51.548c-.056.13-.093.27-.106.415l-.491 5.625.577.544 1.412-1.07.348-3.983-1.74-1.531z" @click="toggle(174)" v-bind:opacity="segments[174] ? 1 : 0.1"/>
        <path d="M116.03 50.816l-1.393 2.036h.008l-.015.18-.004.047-.348 3.984 1.226 1.069.622-.505.495-5.664a1.17 1.17 0 00-.591-1.147z" @click="toggle(104)" v-bind:opacity="segments[104] ? 1 : 0.1"/>
        <path d="M112.362 50.666c-.484 0-.927.263-1.184.654l1.74 1.532h1.409l1.46-2.136a1.257 1.257 0 00-.35-.05z" @click="toggle(154)" v-bind:opacity="segments[154] ? 1 : 0.1"/>
        <path d="M120.48 57.373l-1.215.921 1.048.989h1.828l1.22-.989-1.054-.92z" @click="toggle(123)" v-bind:opacity="segments[123] ? 1 : 0.1"/>
        <path d="M119.065 58.44l-.666.508-.436 4.985h1.943l.342-3.912.037-.428z" @click="toggle(73)" v-bind:opacity="segments[73] ? 1 : 0.1"/>
        <path d="M123.535 58.44l-1.422 1.153-.037.428-.342 3.912-.006.066-.017.2-.004.045h-.005a.353.353 0 01-.065.134l1.298 1.946a1.43 1.43 0 00.576-1.013l.56-6.4z" @click="toggle(69)" v-bind:opacity="segments[69] ? 1 : 0.1"/>
        <path d="M117.936 64.244l-.093 1.067a1.167 1.167 0 001.183 1.297h3.075c.218 0 .427-.054.615-.148l-1.297-1.945a.287.287 0 01-.059.005h-1.182a.288.288 0 01-.294-.277h-.005z" @click="toggle(39)" v-bind:opacity="segments[39] ? 1 : 0.1"/>
        <path d="M119.114 51.548c-.055.13-.093.27-.105.415l-.492 5.625.577.544 1.412-1.07.349-3.983-1.74-1.531z" @click="toggle(173)" v-bind:opacity="segments[173] ? 1 : 0.1"/>
        <path d="M124.087 50.816l-1.392 2.036h.008l-.016.18-.004.047-.348 3.984 1.226 1.069.623-.505.494-5.664a1.17 1.17 0 00-.59-1.147h-.001z" @click="toggle(119)" v-bind:opacity="segments[119] ? 1 : 0.1"/>
        <path d="M120.42 50.666c-.485 0-.928.263-1.185.654l1.74 1.532h1.41l1.46-2.136a1.257 1.257 0 00-.35-.05z" @click="toggle(153)" v-bind:opacity="segments[153] ? 1 : 0.1"/>
        <path d="M109.4 66.388a.806.806 0 01-.807.806.806.806 0 01-.806-.806.806.806 0 01.806-.806.806.806 0 01.806.806z" @click="toggle(44)" v-bind:opacity="segments[44] ? 1 : 0.1"/>
        <path d="M117.397 66.388a.806.806 0 01-.806.806.806.806 0 01-.806-.806.806.806 0 01.806-.806.806.806 0 01.806.806z" @click="toggle(20)" v-bind:opacity="segments[20] ? 1 : 0.1"/>
        <path d="M85.81 68.152v-4.237h2.94v4.237zm-3.792-4.237h2.824v4.237h-2.824zm7.722-1.429h-8.701v13.225h.98v-6.13h6.73v4.314c0 .28-.063.373-.263.373-.2.015-.874.031-1.548-.016.158.388.316 1.04.358 1.444.937 0 1.548-.031 1.928-.264.39-.248.516-.683.516-1.521z" @click="toggle(47)" v-bind:opacity="segments[47] ? 1 : 0.1"/>
        <path d="M122.226 71.333v-2.606h2.18v2.606zm-2.812-2.606h2.094v2.606h-2.094zm5.726-.878h-6.452v8.132h.726v-3.77h4.992v2.653c0 .172-.047.23-.196.23-.148.01-.648.018-1.148-.01.117.238.234.639.266.887.695 0 1.148-.02 1.429-.162.289-.153.383-.42.383-.936z" @click="toggle(15)" v-bind:opacity="segments[15] ? 1 : 0.1"/>
        <rect width="131.294" height="26.276" fill="red" opacity=".15" ry="0"/>
        <path fill="red" d="M88.22 21.844a.941.941 0 01-.94.941.941.941 0 01-.942-.941.941.941 0 01.942-.941.941.941 0 01.94.941z" @click="toggle(28)" v-bind:opacity="segments[28] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M82.383 11.32l-1.418 1.076 1.223 1.154h2.134l1.424-1.154-1.23-1.075z" @click="toggle(132)" v-bind:opacity="segments[132] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M80.732 12.567l-.778.592-.509 5.82h2.269l.399-4.568.043-.499z" @click="toggle(82)" v-bind:opacity="segments[82] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M85.95 12.567l-1.66 1.345-.043.499-.4 4.567-.007.077-.02.233-.005.053h-.005a.413.413 0 01-.075.157l1.515 2.272c.37-.277.63-.703.672-1.183l.653-7.471z" @click="toggle(78)" v-bind:opacity="segments[78] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M79.413 19.34l-.109 1.247c-.073.839.543 1.514 1.382 1.514h3.59c.254 0 .498-.063.717-.172l-1.514-2.27a.39.39 0 01-.068.005h-1.38a.337.337 0 01-.344-.323h-.005z" @click="toggle(32)" v-bind:opacity="segments[32] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M80.789 4.52a1.598 1.598 0 00-.123.485l-.572 6.542.681.651 1.64-1.24.406-4.65-2.032-1.788z" @click="toggle(182)" v-bind:opacity="segments[182] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M86.594 3.665l-1.625 2.378h.009l-.018.21-.005.055-.407 4.65 1.42 1.24.74-.607.576-6.586c.05-.583-.232-1.086-.69-1.34z" @click="toggle(112)" v-bind:opacity="segments[112] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M82.313 3.49c-.565 0-1.082.308-1.383.764l2.03 1.788h1.646l1.705-2.493a1.466 1.466 0 00-.409-.058z" @click="toggle(162)" v-bind:opacity="segments[162] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M91.789 11.32l-1.418 1.076 1.223 1.154h2.134l1.424-1.154-1.23-1.075z" @click="toggle(108)" v-bind:opacity="segments[108] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M90.138 12.567l-.778.592-.509 5.82h2.269l.399-4.568.043-.499z" @click="toggle(58)" v-bind:opacity="segments[58] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M95.356 12.567l-1.66 1.345-.043.499-.4 4.567-.006.077-.02.233-.006.053h-.005a.414.414 0 01-.075.157l1.515 2.272c.371-.277.63-.703.672-1.183l.653-7.471z" @click="toggle(53)" v-bind:opacity="segments[53] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M88.82 19.34l-.11 1.247c-.073.839.544 1.514 1.382 1.514h3.59c.254 0 .498-.063.718-.172l-1.515-2.27a.39.39 0 01-.068.005h-1.38a.337.337 0 01-.344-.323h-.005z" @click="toggle(8)" v-bind:opacity="segments[8] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M90.195 4.52a1.599 1.599 0 00-.123.485l-.572 6.542.682.651 1.639-1.24.406-4.65-2.032-1.788z" @click="toggle(158)" v-bind:opacity="segments[158] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M96 3.665l-1.625 2.378h.009l-.018.21-.005.055-.407 4.65 1.421 1.24.74-.608.575-6.585c.05-.583-.232-1.086-.69-1.34z" @click="toggle(103)" v-bind:opacity="segments[103] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M91.719 3.49c-.565 0-1.082.308-1.382.764l2.03 1.788h1.645l1.705-2.493a1.466 1.466 0 00-.409-.058z" @click="toggle(137)" v-bind:opacity="segments[137] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M101.195 11.32l-1.418 1.076L101 13.55h2.134l1.425-1.154-1.23-1.075z" @click="toggle(127)" v-bind:opacity="segments[127] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M99.544 12.567l-.778.592-.509 5.82h2.269l.399-4.568.043-.499z" @click="toggle(77)" v-bind:opacity="segments[77] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M104.762 12.567l-1.66 1.345-.043.499-.4 4.567-.006.077-.02.233-.006.053h-.005a.413.413 0 01-.075.157l1.515 2.272c.37-.277.63-.703.672-1.183l.653-7.471z" @click="toggle(57)" v-bind:opacity="segments[57] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M98.226 19.34l-.11 1.247c-.073.839.544 1.514 1.383 1.514h3.589c.254 0 .498-.063.718-.172l-1.514-2.27a.39.39 0 01-.07.005h-1.38a.337.337 0 01-.343-.323h-.005z" @click="toggle(27)" v-bind:opacity="segments[27] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M99.601 4.52a1.599 1.599 0 00-.123.485l-.571 6.542.68.651 1.64-1.24.406-4.65-2.032-1.788z" @click="toggle(161)" v-bind:opacity="segments[161] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M105.406 3.665l-1.625 2.378h.009l-.018.21-.005.055-.406 4.65 1.42 1.24.74-.608.575-6.585c.05-.583-.232-1.086-.69-1.34z" @click="toggle(107)" v-bind:opacity="segments[107] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M101.125 3.49c-.565 0-1.082.308-1.382.764l2.03 1.788h1.646l1.704-2.493a1.466 1.466 0 00-.409-.058z" @click="toggle(157)" v-bind:opacity="segments[157] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M110.601 11.32l-1.418 1.076 1.223 1.154h2.134l1.425-1.154-1.23-1.075z" @click="toggle(102)" v-bind:opacity="segments[102] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M108.95 12.567l-.778.592-.509 5.82h2.269l.399-4.568.044-.499z" @click="toggle(52)" v-bind:opacity="segments[52] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M114.168 12.567l-1.66 1.345-.043.499-.4 4.567-.006.077-.02.233-.006.053h-.005a.413.413 0 01-.075.157l1.515 2.272c.371-.277.63-.703.672-1.183l.653-7.471z" @click="toggle(80)" v-bind:opacity="segments[80] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M107.632 19.34l-.11 1.247c-.073.839.544 1.514 1.383 1.514h3.589c.254 0 .498-.063.718-.172l-1.514-2.27a.39.39 0 01-.07.005h-1.38a.337.337 0 01-.342-.323h-.005z" @click="toggle(2)" v-bind:opacity="segments[2] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M109.007 4.52a1.598 1.598 0 00-.123.485l-.571 6.542.68.651 1.64-1.24.406-4.65-2.032-1.788z" @click="toggle(136)" v-bind:opacity="segments[136] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M114.812 3.665l-1.625 2.378h.01l-.02.21-.004.055-.407 4.65 1.421 1.24.74-.608.575-6.585c.05-.583-.232-1.086-.69-1.34z" @click="toggle(130)" v-bind:opacity="segments[130] ? 1 : 0.1"/>
        <path fill="#ff2a2a" d="M110.531 3.49c-.565 0-1.082.308-1.382.764l2.03 1.788h1.646l1.704-2.493a1.466 1.466 0 00-.409-.058z" @click="toggle(180)" v-bind:opacity="segments[180] ? 1 : 0.1"/>
        <path fill="red" d="M62.842 10.796v1.246h-1.77v-1.246zm2.539 1.246h-1.833v-1.246h1.833zm-1.833 2.065V12.82h1.833v1.287zm-2.475 0V12.82h1.77v1.287zm0 .807h1.77v2.292h.705v-2.292h1.833v1.288c0 .184-.042.24-.18.24-.126 0-.579.014-1.074-.014.095.24.19.608.222.863.705 0 1.148-.014 1.422-.156.274-.155.358-.41.358-.92V9.99h-1.327c-.232-.17-.506-.368-.812-.566.78-.524 1.57-1.231 2.128-1.939l-.484-.495-.148.057h-5.14v.834h4.392c-.421.41-.937.821-1.443 1.118a21.452 21.452 0 00-1.464-.778l-.495.594c.632.312 1.38.764 2.001 1.175h-3.002v7.273h.738zm-1.591-5.858c-.337-.693-1.117-1.641-1.78-2.278l-.548.65c.664.666 1.422 1.656 1.749 2.35zm-.232 2.943h-2.275v.99h1.517v3.637a19.557 19.557 0 01-1.643 1.599l.379 1.019c.6-.595 1.158-1.203 1.696-1.826.642 1.118 1.59 1.614 2.97 1.684 1.159.071 3.392.043 4.561-.028.042-.311.158-.792.243-1.033-1.254.113-3.656.156-4.804.085-1.232-.057-2.138-.524-2.644-1.585z" @click="toggle(3)" v-bind:opacity="segments[3] ? 1 : 0.1"/>
        <path fill="red" d="M70.342 11.362h3.972v1.387h-3.972zm5.72 3.34h-3.234v-1.16h2.265V10.57h-5.499v2.971h2.444v1.16h-3.381v4.048h.78v-3.085h2.601v3.721h.79v-3.721h2.444v1.98c0 .17-.053.213-.21.227-.158.014-.717.014-1.349-.014.106.283.232.665.274.962.811 0 1.338 0 1.664-.17.327-.155.411-.438.411-.99zM75.04 6.566c-.2.509-.579 1.259-.874 1.726l.632.354c.306-.425.706-1.076 1.054-1.698zm1.665 2.08h-3.94V6.452h-.79v2.194h-2.201l.653-.397a8.77 8.77 0 00-.896-1.655l-.695.382c.305.51.664 1.203.822 1.67h-1.686v3.028h.748V9.565h7.216v2.109h.769z" @click="toggle(3)" v-bind:opacity="segments[3] ? 1 : 0.1"/>
        <path fill="red" d="M121.81 15.162v-3.504h2.542v3.504zm-3.281-3.504h2.442v3.504h-2.442zm6.68-1.181h-7.528v10.938h.848v-5.071h5.823v3.569c0 .23-.054.308-.227.308-.174.013-.757.025-1.34-.013.137.32.273.86.31 1.194.81 0 1.34-.026 1.667-.218.338-.206.447-.565.447-1.259z" @click="toggle(46)" v-bind:opacity="segments[46] ? 1 : 0.1"/>
        <path fill="red" d="M6.936 3.663c-.472 0-.851.379-.851.85v16.555c0 .472.38.85.85.85h46.718c.471 0 .85-.378.85-.85V4.513c0-.471-.379-.85-.85-.85zM32.89 6.296l.996.495c-.686 1.245-1.77 2.575-2.767 3.41a7.89 7.89 0 00-.531-1.09c.863-.707 1.837-1.853 2.302-2.815zm1.804.382h5.336v4.74h-5.336zm-23.19.1h1.197c-.023.268-.056.735-.067 1.075-.011.34-.022.792-.045 1.287.775-.113 1.561-.311 2.159-.538l.022 1.387c-.63.184-1.439.354-2.202.467-.011.566-.022 1.118-.022 1.613v.481c.796-.297 1.615-.438 2.28-.438 1.627 0 2.855 1.118 2.855 2.915 0 1.67-.752 2.83-2.368 3.325a5.817 5.817 0 01-1.384.198l-.399-1.415c.443 0 .908 0 1.318-.099.918-.212 1.726-.835 1.726-2.024 0-1.075-.763-1.67-1.76-1.67-.774 0-1.516.17-2.247.468.011 1.16.045 2.335.045 2.886 0 1.486-.432 1.91-1.074 1.91-.952 0-2.413-1.103-2.413-2.461 0-1.19 1.118-2.42 2.413-3.142v-.877c0-.496 0-1.019.011-1.542a6.905 6.905 0 01-.72.042c-.486 0-1.007-.014-1.438-.07l-.033-1.36c.62.1 1.051.114 1.45.114.232 0 .486-.015.752-.029 0-.636.011-1.145.011-1.4 0-.297-.033-.85-.066-1.104zm32.223.07h6.187v4.825h-6.187zm-23.334.028h8.578v3.254h-8.578zm15.297.764v.948h3.299V7.64zm-14.334.241v1.245h1.572V7.88zm2.458 0v1.245h1.615V7.88zm2.49 0v1.245h1.672V7.88zm18.408.226v2.307h4.15V8.107zm-28.713.212c.808.524 2.037 1.458 2.59 2.01l-.543 1.132c-.53-.623-1.848-1.6-2.534-2.066zm17.134 1.048l.908.466c-.254.58-.587 1.175-.93 1.755v7.641h-.996v-6.183c-.376.523-.786.976-1.162 1.372a10.984 10.984 0 00-.52-1.33c.985-.892 2.047-2.306 2.7-3.721zm2.557.127v.948h3.299v-.948zm-14.666 1.344h7.328v6.099h-7.328zm1.03.877v.892h5.235v-.892zm12.02.51h6.398v1.09h-1.373v1.032h1.583v1.132H39.1v2.392c0 .65-.099.976-.464 1.16-.365.198-.897.212-1.683.212a6.493 6.493 0 00-.332-1.188c.553.028 1.085.028 1.24.013.166-.014.21-.056.21-.226V15.48H33.81v-1.132h4.261v-1.033h-3.996zm8.092.82h4.006v6.099h-1.018v-.637H43.14v.736h-.974zm5.092 0h4.206v6.127h-1.03v-.665h-2.191v.736h-.985zm-25.205.397v.877h5.236v-.877zm21.087.863v2.943h2.014v-2.943zm5.103 0v2.943h2.191v-2.943zm-36.683.014c-.797.495-1.35 1.203-1.35 1.769 0 .552.642 1.033 1.018 1.033.233 0 .366-.184.366-.651 0-.44-.023-1.246-.034-2.151zm10.493.835v.92h5.236v-.92zm13.339.41c.487.566 1.084 1.372 1.36 1.91l-.774.708c-.254-.538-.83-1.387-1.317-1.995zm-12.475 1.401l.941.538c-.908.721-2.325 1.4-3.443 1.782-.177-.254-.542-.75-.774-.976 1.162-.283 2.501-.806 3.276-1.344zm3.332.014c1.228.481 2.612 1.132 3.442 1.599l-1.096.679c-.708-.453-1.937-1.09-3.154-1.584z" @click="toggle(13)" v-bind:opacity="segments[13] ? 1 : 0.1"/>
      </svg>
    </div>
    <div class="lg:flex-grow lg:w-1/2 lg:pl-20 flex flex-col lg:items-start items-left text-left">
      <div class="mb-5">
        <button @click="allOn" class="text-white bg-gray-500 border-0 mr-5 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded">All ON</button>
        <button @click="allOff" class="text-white bg-gray-500 border-0 mr-5 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded">All OFF</button>
      </div>

      <label for="barcode" class="leading-7 text-sm text-gray-600">ESL Barcode:</label>
      <input type="type" id="barcode" name="barcode" v-model.trim="barcode" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      <p class="text-sm mt-2 text-gray-500">PLID={{plid}}, LotNum={{lotNum}}, Year={{year}}, Week={{week}}, SerialNum={{serialNum}}, Type={{type}}</p>
    </div>
  </div>
</template>

<script>
function payload2segments(payload) {
  let segments = Array(184).fill(false);
  Array.from(payload.substring(6, 52)).forEach(function(val, idx) {
    const bits = parseInt(val, 16);
    if (!bits) return;
    segments[idx*4] = Boolean(bits & 0x8);
    segments[idx*4 + 1] = Boolean(bits & 0x4);
    segments[idx*4 + 2] = Boolean(bits & 0x2);
    segments[idx*4 + 3] = Boolean(bits & 0x1);
  });
  return segments;
}

function segments2payload(segments) {
  const data = BigInt('0b'+segments.map((x) => x ? '1' : '0').join(''));
  return ('0'.repeat(46) + data.toString(16).substring(0, 46)).slice(-46);
}

function normalizeBarcode(barcode) {
  return /^[a-zA-Z][0-9]{11,16}$/.test(barcode) ? barcode : '';
}

// D4586030516411091 -> 2c 14 eb e4
function barcode2plid(barcode) {
  const num4 = parseInt(barcode.substring(2, 7), 10) || 0;
  const num5 = parseInt(barcode.substring(7, 12), 10) || 0;
  const num3 = num4 * 65536 + num5;

  let plid = '';
  plid += ('00' + (num3 & 0xff).toString(16)).slice(-2);
  plid += ('00' + ((num3 >> 8) & 0xff).toString(16)).slice(-2);
  plid += ('00' + ((num3 >> 16) & 0xff).toString(16)).slice(-2);
  plid += ('00' + ((num3 >> 24) & 0xff).toString(16)).slice(-2);

  return plid;
}

function generateCode(plid, segments) {
  const page = '00';
  let cmd = '84' + plid + '37' + page + '0000' + segments2payload(segments);

  // 84 2C 14 EB E4 37 00 00 00 F0 E5 2E FA E1 2B BF F8 8F FF B8 CB 2F FE E3 3F EE F2 8B FF F8 8F BB [30 44] <- CRC
  let crc = 0x8408;
  for (let i=0; i<cmd.length/2; i++) {
    crc ^= parseInt(cmd.substring(2*i, 2*(i+1)), 16);
    for (let j=0; j<8; j++) {
      if (crc & 0x1) {
        crc >>= 1;
        crc ^= 0x8408;
      } else {
        crc >>= 1;
      }
    }
  }

  cmd += ('00' + (crc & 0xff).toString(16)).slice(-2);
  cmd += ('00' + ((crc >> 8) & 0xff).toString(16)).slice(-2);
  return cmd.toUpperCase();
}

function normalizeCode(code) {
  if (!code) return '';
  return code.replace(/[^0-9a-fA-F]/g, '0');
}


export default {
  emits: [ 'changed' ],
  props: {
    initCode: String,
  },
  data(){
    return {
      segments: payload2segments(normalizeCode(this.initCode.substring(12, 118))),
      plid: ('0'.repeat(8) + normalizeCode(this.initCode.substring(2, 10))).slice(-8),
      barcode: '',
    }
  },
  mounted: function() {
    this.$emit("changed", {code: generateCode(this.plid, this.segments)});
  },
  watch: {
    barcode: function() {
      const barcode = normalizeBarcode(this.barcode);
      this.plid = barcode ? barcode2plid(barcode) : '00000000';
    },
    segments: {
      handler: function() {
        this.$emit("changed", {code: generateCode(this.plid, this.segments)});
      },
      deep: true
    },
    plid: function() {
      this.$emit("changed", {code: generateCode(this.plid, this.segments)});
    },
  },
  computed: {
    lotNum: function() {
      return normalizeBarcode(this.barcode).substring(2, 4) || 'Unknown';
    },
    year: function() {
      return normalizeBarcode(this.barcode).substring(4, 5) || 'Unknown';
    },
    week: function() {
      return normalizeBarcode(this.barcode).substring(5, 7) || 'Unknown';
    },
    serialNum: function() {
      return normalizeBarcode(this.barcode).substring(7, 12) || 'Unknown';
    },
    type: function() {
      const t = normalizeBarcode(this.barcode).substring(12, 16);
      return (t && t.length == 4) ? t : 'Unknown';
    },
  },
  methods: {
    toggle: function(seg){
      this.segments[seg] = !this.segments[seg];
    },
    allOn: function() {
      this.segments = payload2segments('000000F0E52EFAE12BBFF88FFFB8CB2FFEE33FEEF28BFFF88FBB');
    },
    allOff: function() {
      this.segments = this.segments.fill(false);
    },
  }
}
</script>

<style lang="scss" scoped>
svg {
  @apply object-cover object-center rounded max-w-full
}
</style>
