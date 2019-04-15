// 锚点
function toScrollIntoView(id) {
  document.getElementById(id).scrollIntoView(false)
}

function showDialog() {
  $('.dialog').addClass('show')
}
// 弹窗关闭

function closeDialog() {
  $('.del').parent().parent().removeClass('show')
}