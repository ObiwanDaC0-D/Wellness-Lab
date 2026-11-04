import test from 'node:test';
import assert from 'node:assert/strict';
import {validateArchive} from '../src/archive.js';
test('archive validation',()=>{assert.throws(()=>validateArchive({version:1}));assert.equal(validateArchive({format:'wellness-lab-archive',version:1,papers:[],workbench:{},learning:{}}).papers.length,0);});
