<template>
  <ul class="pagination" role="navigation" aria-label="Pagination">
      <li class="pagination-prev"><a @click="pagination.current_page > 1 && prev()" :aria-disabled="pagination.current_page <= 1" title="Previous"><i class="fa fa-caret-left"> </i></a></li>
      <li><span class="current">{{ pagination.current_page }}</span> of <span>{{ pagination.total_pages }}</span></li>
      <li class="pagination-next"><a @click="pagination.current_page < pagination.total_pages && next()" :aria-disabled="pagination.current_page >= pagination.total_pages" title="Next"><i class="fa fa-caret-right"> </i></a></li>
  </ul>
</template>

<script>
export default {
  name:'paginate',
  props: {
    pagination: {
      type: Object,
      required: true
    },
    next: {
      type: Function,
      required: true
    },
    prev: {
      type: Function,
      required: true
    }
  },
}
</script>
