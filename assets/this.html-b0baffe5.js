import{_ as t,p,q as e,Z as s,s as n,R as a}from"./framework-053dfde5.js";const o={},i=s(`<h1 id="令人头疼的-this-对象" tabindex="-1"><a class="header-anchor" href="#令人头疼的-this-对象" aria-hidden="true">#</a> 令人头疼的 This 对象</h1><p>在 Javascript 中 this 动态指向，场景较多。 开发中经常会遇见 this 指向谁的问题。理解 this 对我们开发并且写出更加优雅的代码是极有裨益的。</p><h2 id="this-到底指向谁呢" tabindex="-1"><a class="header-anchor" href="#this-到底指向谁呢" aria-hidden="true">#</a> This 到底指向谁呢?</h2><h3 id="_1-全局环境中的-this" tabindex="-1"><a class="header-anchor" href="#_1-全局环境中的-this" aria-hidden="true">#</a> 1. 全局环境中的 this</h3><p>在全局环境中调用时，this 指向 window; 在严格模式下(use strict)指向 undefined</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// window</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">strictFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个是一个基础的列子, 下面已改打印什么呢?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fn</span><span class="token operator">:</span> <span class="token function">funciton</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>bar<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> foo<span class="token punctuation">.</span>fn
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary class="custom-container-title">答案</summary><p>window undefined</p></details>`,9),c=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"原因"),n("p",null,"fon.fn 函数赋值给 fn 变量, 在执行 fn 这个变量函数时,执行环境在全局环境中。因此 this 为 window 对象,而 window 对象下没有 bar 属性, 所以打印 undefined")],-1),l=s(`<p>如果换成另外一种调用的话, 结果会是怎样呢？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fn</span><span class="token operator">:</span> <span class="token function">funciton</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>bar<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
foo<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary class="custom-container-title">答案</summary><p>foo 100</p></details><h3 id="_2-上下文对象调用中的-this" tabindex="-1"><a class="header-anchor" href="#_2-上下文对象调用中的-this" aria-hidden="true">#</a> 2. 上下文对象调用中的 this</h3><p>当上下文对象调用时，this 指向最后调用它的对象。看看下面的例子，你知道答案吗？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>text<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> o1<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> o3 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> print <span class="token operator">=</span> o1<span class="token punctuation">.</span>print<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary class="custom-container-title">答案</summary><p>1, 1, undefined</p></details>`,7),u=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"原因"),n("p",null,"第一个打印为 1，比较简单且在上面提到就不赘述了"),n("p",null,"第二个打印也为 1 return 的是 o1 调用 print 方法, 对于 print 方法里面的 this 而言, 将会指向 o1 对象"),n("p",null,[a("第三个打印为 undefined 将 o1 的方法 print 赋值于变量 print，由于脱离了 o1 的执行上下文"),n("strong",null,"裸奔"),a("调用, 此时的 this 指向全局对象 window")])],-1),r=s(`<h3 id="通过-bind-call-apply-改变-this-指向" tabindex="-1"><a class="header-anchor" href="#通过-bind-call-apply-改变-this-指向" aria-hidden="true">#</a> 通过 bind/call/apply 改变 this 指向</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>bind/call/apply 都是用来改变 this 指向的函数，它们之间有些区别.</p>`,3),d=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"bind、call、apply"),n("p",null,"call/apply 直接执行相关函数调用, 第一个参数为 this 指向的对象,call/apply 之间的区别在于参数的设定上 bind 不会执行相关函数,则是返回一个新的函数并且设定了函数 this 的指向")],-1),k=s('<h3 id="构造函数和-this" tabindex="-1"><a class="header-anchor" href="#构造函数和-this" aria-hidden="true">#</a> 构造函数和 this</h3><p>构造函数</p><h3 id="箭头函数中的-this" tabindex="-1"><a class="header-anchor" href="#箭头函数中的-this" aria-hidden="true">#</a> 箭头函数中的 this</h3><h3 id="this-优先级" tabindex="-1"><a class="header-anchor" href="#this-优先级" aria-hidden="true">#</a> this 优先级</h3>',4),v=[i,c,l,u,r,d,k];function h(m,b){return p(),e("div",null,v)}const w=t(o,[["render",h],["__file","this.html.vue"]]);export{w as default};
