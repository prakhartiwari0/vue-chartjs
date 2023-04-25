import{_ as n,c as a,o as s,a as t}from"./app.494b20fe.js";const g='{"title":"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430","slug":"\u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430"},{"level":2,"title":"\u0421\u043E\u0431\u044B\u0442\u0438\u044F","slug":"\u0441\u043E\u0431\u044B\u0442\u0438\u044F"},{"level":2,"title":"\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u0435\u0442\u043E\u0434\u044B","slug":"\u0433n\u043E\u0431\u0430n\u044C\u043D\u044B\u0435-\u043C\u0435\u0442\u043E\u0434\u044B"},{"level":3,"title":"generateChart()","slug":"generatechart"},{"level":2,"title":"\u041C\u0435\u0442\u043E\u0434\u044B \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u0430","slug":"\u043C\u0435\u0442\u043E\u0434\u044B-\u044D\u043A\u0437\u0435\u043C\u043Fn\u044F\u0440\u0430"},{"level":3,"title":"generateLegend()","slug":"generatelegend"},{"level":3,"title":"addPlugin()","slug":"addplugin"},{"level":3,"title":"renderChart()","slug":"renderchart"},{"level":2,"title":"\u041E\u0431\u044A\u0435\u043A\u0442 Chart.js","slug":"\u043E\u0431\u044A\u0435\u043A\u0442-chart-js"},{"level":2,"title":"Canvas-\u044D\u043B\u0435\u043C\u0435\u043D\u0442","slug":"canvas-\u044Dn\u0435\u043C\u0435\u043D\u0442"}],"relativePath":"ru/api/index.md","lastUpdated":1682409272000}',e={},p=t(`<h1 id="\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A" tabindex="-1">\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A <a class="header-anchor" href="#\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A" aria-hidden="true">#</a></h1><h2 id="\u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430" tabindex="-1">\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430 <a class="header-anchor" href="#\u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430" aria-hidden="true">#</a></h2><p>\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442 \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0435 \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 <code>vue-chartjs</code>. \u0422\u0430\u043A \u043A\u0430\u043A \u0432\u044B <code>extend</code>\u0438\u0442\u0435 \u0438\u0445, \u043E\u043D\u0438 <em>\u043D\u0435\u0432\u0438\u0434\u0438\u043C\u044B</em>, \u043D\u043E \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0438\u0445:</p><table><thead><tr><th>\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E</th><th>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</th></tr></thead><tbody><tr><td>width</td><td>\u0448\u0438\u0440\u0438\u043D\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430</td></tr><tr><td>height</td><td>\u0432\u044B\u0441\u043E\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430</td></tr><tr><td>chart-id</td><td>id canvas-\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430</td></tr><tr><td>css-classes</td><td>String \u0441 \u043A\u043B\u0430\u0441\u0441\u0430\u043C\u0438 CSS \u0434\u043B\u044F \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 div</td></tr><tr><td>styles</td><td>Object \u0441\u043E \u0441\u0442\u0438\u043B\u044F\u043C\u0438 CSS \u0434\u043B\u044F \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 div</td></tr><tr><td>plugins</td><td>Array \u0441 \u043F\u043B\u0430\u0433\u0438\u043D\u0430\u043C\u0438 chartjs</td></tr></tbody></table><h2 id="\u0441\u043E\u0431\u044B\u0442\u0438\u044F" tabindex="-1">\u0421\u043E\u0431\u044B\u0442\u0438\u044F <a class="header-anchor" href="#\u0441\u043E\u0431\u044B\u0442\u0438\u044F" aria-hidden="true">#</a></h2><p>\u0415\u0441\u043B\u0438 \u043C\u0438\u043A\u0441\u0438\u043D <code>reactiveData</code> \u0438\u043B\u0438 <code>reactiveProp</code> \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D, \u0431\u0443\u0434\u0443\u0442 \u0432\u044B\u0437\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F:</p><table><thead><tr><th>\u0421\u043E\u0431\u044B\u0442\u0438\u0435</th><th>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</th></tr></thead><tbody><tr><td><code>chart:render</code></td><td>\u0435\u0441\u043B\u0438 \u043C\u0438\u043A\u0441\u0438\u043D \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u043B\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u0440\u0438\u0441\u043E\u0432\u043A\u0443 \u0433\u0440\u0430\u0444\u0438\u043A\u0430</td></tr><tr><td><code>chart:destroy</code></td><td>\u0435\u0441\u043B\u0438 \u043C\u0438\u043A\u0441\u0438\u043D \u0443\u0434\u0430\u043B\u044F\u0435\u0442 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430</td></tr><tr><td><code>chart:update</code></td><td>\u0435\u0441\u043B\u0438 \u043C\u0438\u043A\u0441\u0438\u043D \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043B\u044F\u0435\u0442 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u043E\u043B\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0440\u0438\u0441\u043E\u0432\u043A\u0438</td></tr><tr><td><code>labels:update</code></td><td>\u0435\u0441\u043B\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B \u043D\u043E\u0432\u044B\u0435 \u043C\u0435\u0442\u043A\u0438</td></tr><tr><td><code>xlabels:update</code></td><td>\u0435\u0441\u043B\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B \u043D\u043E\u0432\u044B\u0435 \u043C\u0435\u0442\u043A\u0438 \u043F\u043E \u043E\u0441\u0438 x</td></tr><tr><td><code>ylabels:update</code></td><td>\u0435\u0441\u043B\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B \u043D\u043E\u0432\u044B\u0435 \u043C\u0435\u0442\u043A\u0438 \u043F\u043E \u043E\u0441\u0438 y</td></tr></tbody></table><h2 id="\u0433n\u043E\u0431\u0430n\u044C\u043D\u044B\u0435-\u043C\u0435\u0442\u043E\u0434\u044B" tabindex="-1">\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u0435\u0442\u043E\u0434\u044B <a class="header-anchor" href="#\u0433n\u043E\u0431\u0430n\u044C\u043D\u044B\u0435-\u043C\u0435\u0442\u043E\u0434\u044B" aria-hidden="true">#</a></h2><p>\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u0435\u0442\u043E\u0434\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u044B</p><h3 id="generatechart" tabindex="-1">generateChart() <a class="header-anchor" href="#generatechart" aria-hidden="true">#</a></h3><ul><li><strong>\u0422\u0438\u043F:</strong> <code>Function</code></li><li><strong>\u0410\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u044B:</strong>: <code>chart-id</code>, <code>chart-type</code></li><li><strong>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435:</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> generateChart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token comment">// First argument is the chart-id, second the chart type.</span>
<span class="token keyword">const</span> CustomLine <span class="token operator">=</span> <span class="token function">generateChart</span><span class="token punctuation">(</span><span class="token string">&#39;custom-line&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;LineWithLine&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u043C\u0435\u0442\u043E\u0434\u044B-\u044D\u043A\u0437\u0435\u043C\u043Fn\u044F\u0440\u0430" tabindex="-1">\u041C\u0435\u0442\u043E\u0434\u044B \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u0430 <a class="header-anchor" href="#\u043C\u0435\u0442\u043E\u0434\u044B-\u044D\u043A\u0437\u0435\u043C\u043Fn\u044F\u0440\u0430" aria-hidden="true">#</a></h2><p>\u041C\u0435\u0442\u043E\u0434\u044B \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u0430 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u0432\u043D\u0443\u0442\u0440\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u0433\u0440\u0430\u0444\u0438\u043A\u0430-\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430</p><h3 id="generatelegend" tabindex="-1">generateLegend() <a class="header-anchor" href="#generatelegend" aria-hidden="true">#</a></h3><p>\u0412\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u0434\u043B\u044F \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 HTML-\u043B\u0435\u0433\u0435\u043D\u0434\u044B</p><ul><li><strong>\u0422\u0438\u043F:</strong> <code>Function</code></li><li><strong>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435:</strong></li></ul><div class="language-js"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Line <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> Line<span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;datasets&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;options&#39;</span><span class="token punctuation">]</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">htmlLegend</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>datasets<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>htmlLegend <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">generateLegend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="addplugin" tabindex="-1">addPlugin() <a class="header-anchor" href="#addplugin" aria-hidden="true">#</a></h3><p>\u0412 Chart.js \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0438 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u044B. \u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u044B \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0441 <code>vue-chartjs</code> \u043A\u0430\u043A \u043E\u043F\u0438\u0441\u0430\u043D\u043E \u0432 <a href="http://www.chartjs.org/docs/latest/developers/plugins.html" target="_blank" rel="noopener noreferrer">\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043A Chart.js</a>.</p><p>\u0415\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u044B, <code>vue-chartjs</code> \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434 <code>addPlugin()</code> \u0412\u0430\u043C \u043D\u0430\u0434\u043E \u0432\u044B\u0437\u0432\u0430\u0442\u044C <code>addPlugin()</code> \u043F\u0435\u0440\u0435\u0434 \u0432\u044B\u0437\u043E\u0432\u043E\u043C \u043C\u0435\u0442\u043E\u0434\u0430 <code>renderChart()</code>.</p><ul><li><strong>\u0422\u0438\u043F:</strong> <code>Function</code></li><li><strong>\u0410\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u044B:</strong>: <code>Array</code> \u043F\u043B\u0430\u0433\u0438\u043D\u043E\u0432</li><li><strong>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435:</strong></li></ul><div class="language-js"><pre><code><span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;my-plugin&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">beforeInit</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">chart</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="renderchart" tabindex="-1">renderChart() <a class="header-anchor" href="#renderchart" aria-hidden="true">#</a></h3><p>\u0421\u043E\u0437\u0434\u0430\u0451\u0442 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 Chart.js \u0438 \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u044B\u0432\u0430\u0435\u0442 \u0433\u0440\u0430\u0444\u0438\u043A.</p><ul><li><strong>\u0422\u0438\u043F:</strong> <code>Function</code></li><li><strong>\u0410\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u044B:</strong>: <code>Chart Data</code>, <code>Chart Options</code></li><li><strong>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435:</strong></li></ul><div class="language-js"><pre><code><span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u042F\u043D\u0432\u0430\u0440\u044C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u0424\u0435\u0432\u0440\u0430\u043B\u044C&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u041A\u0430\u043A\u0438\u0435-\u0442\u043E \u0434\u0430\u043D\u043D\u044B\u0435&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#f87979&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">responsive</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u043E\u0431\u044A\u0435\u043A\u0442-chart-js" tabindex="-1">\u041E\u0431\u044A\u0435\u043A\u0442 Chart.js <a class="header-anchor" href="#\u043E\u0431\u044A\u0435\u043A\u0442-chart-js" aria-hidden="true">#</a></h2><p>\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043E\u0431\u044A\u0435\u043A\u0442\u0443 Chart.js \u0438\u0437 \u0432\u0430\u0448\u0435\u0433\u043E \u0433\u0440\u0430\u0444\u0438\u043A\u0430-\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C <code>this.$data._chart</code></p><h2 id="canvas-\u044Dn\u0435\u043C\u0435\u043D\u0442" tabindex="-1">Canvas-\u044D\u043B\u0435\u043C\u0435\u043D\u0442 <a class="header-anchor" href="#canvas-\u044Dn\u0435\u043C\u0435\u043D\u0442" aria-hidden="true">#</a></h2><p>\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A canvas-\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C <code>this.$refs.canvas</code></p>`,31),o=[p];function c(r,l,d,i,u,k){return s(),a("div",null,o)}var y=n(e,[["render",c]]);export{g as __pageData,y as default};
