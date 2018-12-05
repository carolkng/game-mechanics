---
layout: default
title: Demos
exclude: true
---
<div class="home">
  {%- if site.demos.size > 0 -%}
    <h2 class="post-list-heading">{{ page.list_title | default: "Demos" }}</h2>
    <p>A Phaser 3 version of <a
    href="https://www.gamemechanicsexplorer.com" target="_blank">this amazing resource</a>, made
    mostly for practice.</p>
    <ul class="post-list">
      {%- for demo in site.demos -%}
      {%- unless demo.exclude -%}
      <li>
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <h3>
          <a class="post-link" href="{{ demo.url | relative_url }}">
            {{ demo.title | escape }}
          </a>
        </h3>
        {%- if site.show_excerpts -%}
          {{ demo.excerpt }}
        {%- endif -%}
      </li>
      {%- endunless -%}
      {%- endfor -%}
    </ul>
  {%- endif -%}

</div>

