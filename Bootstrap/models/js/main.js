var current
        $('.gallery  img').click(function (e) {
            e.preventDefault();

            $('#myModal').modal('show') 
            // 初始化后立即调用 show 方法
            //手动打开模态框。在模态框显示之前返回到主调函数中 （也就是，在触发 shown.bs.modal 事件之前）。
            $('#myModal').find('.modal-body img').attr('src', $(this).attr('src'))

            current = $(this)
        });
        $('#myModal  .modal-footer span').eq(1).click(function () {
            if (current.parent().next().find('img')[0]) {
                current = current.parent().next().find('img')
            }
            // console.log(current);
            $('#myModal').find('.modal-body img').attr('src', current.attr('src'))
        })
        $('#myModal  .modal-footer span').eq(0).click(function () {
            if (current.parent().prev().find('img')[0]) {
                current = current.parent().prev().find('img')
            }
            // console.log(current);
            $('#myModal').find('.modal-body img').attr('src', current.attr('src'))
        })