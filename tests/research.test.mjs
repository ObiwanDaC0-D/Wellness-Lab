import test from 'node:test';
import assert from 'node:assert/strict';
import {cleanPapers,cleanWork,validateExtraction,eligibleForSynthesis} from '../src/validation.js';
import {pool} from '../src/synthesis.js';
test('paper validation removes invalid and duplicate identifiers',()=>{const rows=cleanPapers([{id:'123',title:'A'},{id:'123',title:'Duplicate'},{id:'x',title:'Bad'},{id:'456',title:'B'}]);assert.deepEqual(rows.map(x=>x.id),['123','456']);});
test('workbench data retains valid fields and discards unknown keys',()=>{const data=cleanWork({question:'Q',records:{123:{effect:'0.4',se:'0.2',unexpected:'secret'},bad:{effect:'2'}}});assert.equal(data.records['123'].effect,'0.4');assert.equal(data.records['123'].unexpected,undefined);assert.equal(data.records.bad,undefined);});
test('quantitative extraction requires positive standard error',()=>{assert.ok(validateExtraction({effect:'0.2',se:'0'}).length);assert.ok(validateExtraction({effect:'0.2',se:''}).length);assert.equal(eligibleForSynthesis({effect:'-0.2',se:'0.1'}),true);});
test('identical estimates pool to the same estimate',()=>{const p=pool([{effect:0.2,se:0.1},{effect:0.2,se:0.1}]);assert.ok(Math.abs(p.mean-0.2)<1e-10);assert.equal(p.i2,0);});
test('random-effects heterogeneity is nonnegative',()=>{const p=pool([{effect:-0.8,se:0.1},{effect:0.8,se:0.1}],true);assert.ok(p.tau>=0);assert.ok(p.hi>p.lo);});
