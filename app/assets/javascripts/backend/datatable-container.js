// Custom jQuery
// -----------------------------------


(function(window, document, $, undefined){

  $(function(){

    var dtInstance = $('#datatable-contrailer').dataTable({
        'paging':   true,  // Table pagination
        'ordering': true,  // Column ordering
        'info':     true,  // Bottom left status text
        'searching': true,
        // Text translation options
        // Note the required keywords between underscores (e.g _MENU_)
        oLanguage: {
            "sProcessing": "处理中...",
            "sLengthMenu": "显示 _MENU_ 项结果",
            "sZeroRecords": "没有匹配结果",
            "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
            "info": "Showing page _PAGE_ of _PAGES_",
            "zeroRecords": "没有记录",
            "infoEmpty": "没有记录",
            "infoFiltered": "(filtered from _MAX_ total records)",
            "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
            "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
            "sInfoPostFix": "",
            "sSearch": "搜索:",
            "sUrl": "",
            "sEmptyTable": "表中数据为空",
            "sLoadingRecords": "载入中...",
            "sInfoThousands": ",",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上页",
                "sNext": "下页",
                "sLast": "末页"
            },
            "oAria": {
                "sSortAscending": ": 以升序排列此列",
                "sSortDescending": ": 以降序排列此列"
            }
        },  //多语言配置
        // set columns options
        //'aoColumns': [
        //    {'bVisible':false},
        //    {'bVisible':true}
        //],
        sDom: 'C<"clear">lfrtip',
        colVis: {
            'buttonText': '显示隐藏字段'
        }
    });
    var inputSearchClass = 'datatable_input_col_search';
    var columnInputs = $('tfoot .'+inputSearchClass);

    // On input keyup trigger filtering
    columnInputs
      .keyup(function () {
          dtInstance.fnFilter(this.value, columnInputs.index(this));
      });
  });

})(window, document, window.jQuery);
