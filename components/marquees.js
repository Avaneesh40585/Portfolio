// The track slides by exactly -50%, so it holds two identical halves and the
// loop never shows a seam. Each half must be at least as wide as the viewport
// or a gap opens on large monitors — hence `reps`, tuned per chain length.
const marqueesData = [
  {
    id: 'mt1',
    class: 'm1',
    reps: 2,
    sep: '—',
    quotes: [
      { text: 'Talk is cheap. Show me the code.', source: 'Linus Torvalds' },
      { text: 'Simplicity is prerequisite for reliability.', source: 'Edsger W. Dijkstra' }
    ]
  },
  {
    id: 'mt2',
    class: 'm2',
    reps: 2,
    sep: '·',
    quotes: [
      { text: 'Programs must be written for people to read.', source: 'Abelson & Sussman' },
      { text: 'Premature optimization is the root of all evil.', source: 'Donald Knuth' },
      { text: 'Debugging is twice as hard as writing the code.', source: 'Brian Kernighan' }
    ]
  }
];

function renderQuoteChain(marquee) {
  return marquee.quotes.map(q =>
    `“${q.text}” <span class="src">${marquee.sep} ${q.source}</span> ${marquee.sep} `
  ).join('');
}

function renderMarquees() {
  const marqueesHTML = marqueesData.map(m => {
    const half = renderQuoteChain(m).repeat(m.reps);
    return `
      <div class="marquee ${m.class}" aria-hidden="true">
        <div class="track" id="${m.id}">${half}${half}</div>
      </div>
    `;
  }).join('');

  document.getElementById('marquees').innerHTML = marqueesHTML;
}

renderMarquees();
