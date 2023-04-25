import{_ as n,c as a,o as s,a as t}from"./app.494b20fe.js";const g='{"title":"Migration from v4 to v5","description":"","frontmatter":{},"headers":[{"level":2,"title":"Migration from v4 to v5","slug":"migration-from-v4-to-v5"},{"level":3,"title":"ESM","slug":"esm"},{"level":3,"title":"API changes","slug":"api-changes"},{"level":2,"title":"Migration from v3 to v4","slug":"migration-from-v3-to-v4"},{"level":3,"title":"Tree-shaking","slug":"tree-shaking"},{"level":3,"title":"Changing the creation of Charts","slug":"changing-the-creation-of-charts"},{"level":3,"title":"New reactivity system","slug":"new-reactivity-system"},{"level":2,"title":"Migration from vue-chart-3","slug":"migration-from-vue-chart-3"},{"level":3,"title":"Uninstall vue-chart-3","slug":"uninstall-vue-chart-3"},{"level":3,"title":"Install vue-chartjs","slug":"install-vue-chartjs"},{"level":3,"title":"Change component import path","slug":"change-component-import-path"},{"level":3,"title":"Rename components","slug":"rename-components"},{"level":3,"title":"Rename props","slug":"rename-props"}],"relativePath":"migration-guides/index.md","lastUpdated":1682409272000}',p={},e=t(`<h2 id="migration-from-v4-to-v5" tabindex="-1">Migration from v4 to v5 <a class="header-anchor" href="#migration-from-v4-to-v5" aria-hidden="true">#</a></h2><p>With v5, this library introduces a number of breaking changes</p><h3 id="esm" tabindex="-1">ESM <a class="header-anchor" href="#esm" aria-hidden="true">#</a></h3><h4 id="v5-0" tabindex="-1">v5.0 <a class="header-anchor" href="#v5-0" aria-hidden="true">#</a></h4><p>Chart.js v4 and vue-chartjs v5 are <a href="https://nodejs.org/api/esm.html" target="_blank" rel="noopener noreferrer">ESM-only packages</a>. To use them in your project, it also should be ESM:</p><div class="language-json"><pre><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you are experiencing this problem with Jest, you should follow <a href="https://jestjs.io/docs/ecmascript-modules" target="_blank" rel="noopener noreferrer">this doc</a> to enable ESM support. Or, we can recommend you migrate to <a href="https://vitest.dev/" target="_blank" rel="noopener noreferrer">Vitest</a>. Vitest has ESM support out of the box and <a href="https://vitest.dev/guide/migration.html#migrating-from-jest" target="_blank" rel="noopener noreferrer">has almost the same API as Jest</a>. <a href="https://github.com/reactchartjs/react-chartjs-2/commit/7f3ec96101d21e43cae8cbfe5e09a46a17cff1ef" target="_blank" rel="noopener noreferrer">Here is our example of migration</a>.</p><h4 id="v5-1" tabindex="-1">v5.1 <a class="header-anchor" href="#v5-1" aria-hidden="true">#</a></h4><p>Chart.js v4.1 and vue-chartjs v5.1 have restored the CommonJS support.</p><h3 id="api-changes" tabindex="-1">API changes <a class="header-anchor" href="#api-changes" aria-hidden="true">#</a></h3><ul><li><code>chartData</code> props were renamed to <code>data</code></li><li><code>chartOptions</code> props were renamed to <code>options</code></li><li>unknown props will fall through to the canvas element.</li><li><code>generateChart</code> were refactored and renamed to <code>createTypedChart</code></li><li>Vue.js &lt; 2.7 is no longer supported. If you want to use vue-chartjs with Vue &lt; 2.7 you have to lock your version to 4.x.</li></ul><h2 id="migration-from-v3-to-v4" tabindex="-1">Migration from v3 to v4 <a class="header-anchor" href="#migration-from-v3-to-v4" aria-hidden="true">#</a></h2><p>With v4, this library introduces a number of breaking changes. In order to improve performance, offer new features, and improve maintainability, it was necessary to break backwards compatibility, but we aimed to do so only when worth the benefit.</p><p>v4 is fully compatible with Chart.js v3.</p><h3 id="tree-shaking" tabindex="-1">Tree-shaking <a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a></h3><p>v4 of this library, <a href="https://www.chartjs.org/docs/latest/getting-started/v3-migration.html#setup-and-installation" target="_blank" rel="noopener noreferrer">just like Chart.js v3</a>, is tree-shakable. It means that you need to import and register the controllers, elements, scales, and plugins you want to use.</p><p>For a list of all the available items to import, see <a href="https://www.chartjs.org/docs/latest/getting-started/integration.html#bundlers-webpack-rollup-etc" target="_blank" rel="noopener noreferrer">Chart.js docs</a>.</p><p>v3:</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
</code></pre></div><p>v4 \u2014 lazy way:</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;chart.js/auto&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
</code></pre></div><p>v4 \u2014 tree-shakable way:</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token keyword">as</span> ChartJS<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chart.js&#39;</span>

ChartJS<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale<span class="token punctuation">)</span>
</code></pre></div><p>Using the &quot;lazy way&quot; is okay to simplify the migration, but please consider using the tree-shakable way to decrease the bundle size.</p><p>Please note that typed chart components register their controllers by default, so you don&#39;t need to register them by yourself. For example, when using the Pie component, you don&#39;t need to register PieController explicitly.</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Pie <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token keyword">as</span> ChartJS<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> ArcElement<span class="token punctuation">,</span> CategoryScale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chart.js&#39;</span>

ChartJS<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> ArcElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">)</span>
</code></pre></div><h3 id="changing-the-creation-of-charts" tabindex="-1">Changing the creation of Charts <a class="header-anchor" href="#changing-the-creation-of-charts" aria-hidden="true">#</a></h3><p>In v3, you needed to import the component, and then either use extends or mixins and add it.</p><p>v3:</p><div class="language-javascript"><pre><code><span class="token comment">// BarChart.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> Bar<span class="token punctuation">,</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Overwriting base render method with actual data.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;January&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;February&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;March&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;GitHub Commits&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#f87979&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BarChart</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> BarChart <span class="token keyword">from</span> <span class="token string">&#39;path/to/component/BarChart&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;DataPage&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> BarChart <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>In v4, you need to import the component, pass props to it, and use Chart component as a standard Vue component.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bar</span> <span class="token attr-name">:chart-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// DataPage.vue</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token keyword">as</span> ChartJS<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chart.js&#39;</span>

ChartJS<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;BarChart&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chartData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;January&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;February&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;March&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Data One&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#f87979&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="new-reactivity-system" tabindex="-1">New reactivity system <a class="header-anchor" href="#new-reactivity-system" aria-hidden="true">#</a></h3><p>v3 does not update or re-render the chart if new data is passed. You needed to use <code>reactiveProp</code> and <code>reactiveData</code> mixins for that.</p><p>v3:</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Line<span class="token punctuation">,</span> mixins <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> Line<span class="token punctuation">,</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixins<span class="token punctuation">.</span>reactiveProp<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;chartData&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;options&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>chartData<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>v4 charts have data change watcher by default. v4 will update or re-render the chart if new data is passed. Mixins have been removed.</p><p>v4:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bar</span> <span class="token attr-name">:chart-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// DataPage.vue</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token keyword">as</span> ChartJS<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chart.js&#39;</span>

ChartJS<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;BarChart&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">chartData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token comment">/* mutable chart data */</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="migration-from-vue-chart-3" tabindex="-1">Migration from vue-chart-3 <a class="header-anchor" href="#migration-from-vue-chart-3" aria-hidden="true">#</a></h2><h3 id="uninstall-vue-chart-3" tabindex="-1">Uninstall vue-chart-3 <a class="header-anchor" href="#uninstall-vue-chart-3" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token function">pnpm</span> <span class="token function">rm</span> vue-chart-3
<span class="token comment"># or</span>
<span class="token function">yarn</span> remove vue-chart-3
<span class="token comment"># or</span>
<span class="token function">npm</span> uninstall vue-chart-3
</code></pre></div><h3 id="install-vue-chartjs" tabindex="-1">Install vue-chartjs <a class="header-anchor" href="#install-vue-chartjs" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token function">pnpm</span> <span class="token function">add</span> vue-chartjs
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> vue-chartjs
<span class="token comment"># or</span>
<span class="token function">npm</span> i vue-chartjs
</code></pre></div><h3 id="change-component-import-path" tabindex="-1">Change component import path <a class="header-anchor" href="#change-component-import-path" aria-hidden="true">#</a></h3><p>For Vue 2.7 and Vue 3 projects:</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token comment">/* component */</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
</code></pre></div><p>For Vue 2 (&lt;2.7) projects:</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token comment">/* component */</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs/legacy&#39;</span>
</code></pre></div><h3 id="rename-components" tabindex="-1">Rename components <a class="header-anchor" href="#rename-components" aria-hidden="true">#</a></h3><ul><li>BarChart to Bar</li><li>DoughnutChart to Doughnut</li><li>LineChart to Line</li><li>PieChart to Pie</li><li>PolarAreaChart to PolarArea</li><li>RadarChart to Radar</li><li>BubbleChart to Bubble</li><li>ScatterChart to Scatter</li></ul><h3 id="rename-props" tabindex="-1">Rename props <a class="header-anchor" href="#rename-props" aria-hidden="true">#</a></h3><ul><li>options to chartOptions</li></ul>`,54),o=[e];function c(r,l,i,u,k,d){return s(),a("div",null,o)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};
