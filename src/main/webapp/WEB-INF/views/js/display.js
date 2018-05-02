$(function(){
    var pager = $('#dg').datagrid().datagrid('getPager');	// get the pager of datagrid
    pager.pagination({
        buttons:[{
            iconCls:'icon-search',
            handler:function(){
                alert('search');
            }
        },{
            iconCls:'icon-add',
            handler:function(){
                alert('add');
            }
        },{
            iconCls:'icon-edit',
            handler:function(){
                alert('edit');
            }
        }]
    });
});