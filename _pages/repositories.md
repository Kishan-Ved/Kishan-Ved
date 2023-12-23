---
layout: page
permalink: /repositories/
title: Repositories
description: Listed below are my GitHub repositories containing my projects. Every project has a detailed README file available on GitHub.
nav: true
nav_order: 3
---

## GitHub Repositories

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}

