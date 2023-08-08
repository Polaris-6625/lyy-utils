export default (md) => {
  md.renderer.rules.table_open = () => '<div class="vp-table__container"><table>'
  md.renderer.rules.table_close = () => '</table></div>'
}