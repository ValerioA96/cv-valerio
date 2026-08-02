#!/usr/bin/env node
/**
 * Crea e pubblica un tag di release.
 *
 *   npm run release -- <versione> "<descrizione>"
 *   npm run release -- 1.2.0 "PDF Improvements"
 *
 * Lo script riceve gli argomenti da argv invece che da variabili $npm_config_*:
 * quelle funzionano solo se npm esegue gli script con una shell POSIX, mentre su
 * Windows la shell predefinita e' cmd.exe, che non espande la sintassi $VAR.
 */
import { execFileSync } from 'node:child_process';

const argv = process.argv.slice(2);
const dryRun = argv.includes('--dry-run');
const [version, ...rest] = argv.filter((a) => a !== '--dry-run');
const message = rest.join(' ').trim();

const usage = [
  '',
  '  Uso:  npm run release -- <versione> "<descrizione>"',
  '  Es.:  npm run release -- 1.2.0 "PDF Improvements"',
  '',
  '  I due trattini sono necessari: senza, npm si tiene gli argomenti',
  '  invece di passarli allo script.',
  '',
].join('\n');

function fail(msg, extra) {
  console.error(`\n  x ${msg}`);
  if (extra) console.error(`    ${extra}`);
  console.error(usage);
  process.exit(1);
}

const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();

if (!version) fail('Manca la versione.');

if (!/^\d+\.\d+\.\d+$/.test(version)) {
  // caso tipico: e' stata usata la vecchia sintassi con --tag=... e --msg=...
  const hint = process.env.npm_config_tag
    ? `Sembra la vecchia sintassi: npm ha interpretato --tag=${process.env.npm_config_tag} come opzione propria.`
    : undefined;
  fail(`Versione non valida: "${version}". Attesa nel formato x.y.z.`, hint);
}

if (!message) fail('Manca la descrizione della release.');

const tag = `v${version}`;

if (git('tag', '--list', tag)) {
  fail(`Il tag ${tag} esiste gia'.`, `Per rifarlo: git tag -d ${tag} && git push origin :refs/tags/${tag}`);
}

if (git('status', '--porcelain')) {
  console.warn(`\n  ! Attenzione: ci sono modifiche non committate.`);
  console.warn(`    Il tag verra' creato su ${git('rev-parse', '--short', 'HEAD')} e non le includera'.`);
}

console.log(`\n  git tag -a ${tag} -m "${message}"`);
console.log(`  git push origin ${tag}`);

if (dryRun) {
  console.log('\n  (--dry-run: nessun comando eseguito)\n');
  process.exit(0);
}

execFileSync('git', ['tag', '-a', tag, '-m', message], { stdio: 'inherit' });
execFileSync('git', ['push', 'origin', tag], { stdio: 'inherit' });

console.log(`\n  ok - rilasciato ${tag}\n`);
