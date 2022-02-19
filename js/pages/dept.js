layui.config({
    base: '../js/modules/' //你存放新模块的目录，注意，不是layui的模块目录
}).extend({
    modules_index:'md_index',
});

layui.use(['modules_index'],function(){
	var modules_index=layui.modules_index,
	tree=layui.tree,
	table=layui.table;
	tree.render({
		elem:'#tree-dept',
		id:'tree-dept',
		data:[
		{title:'leaf',id:0,children:[
		{title:'魏国',id:1,children:[]},
		{title:'蜀国',id:2,children:[]},
		{title:'吴国',id:3,children:[]},
		],spread:true,disabled:true},
		],
		edit: ['add', 'update', 'del'],
		click:function(obj){
			console.log(obj);
			obj.elem.css({color:'red'});
		},
		operate:function(obj){
			console.log(obj);
			if(obj.type=='add'){
				alert('add');
			}else if(obj.type=='update'){
				alert('update');
			}else if(obj.type=='del'){
				alert('del')
			}
		}
	});

	table.render({
		elem:'#table-dept',
		id:'table-dept',
		data:[
		{id:1,name:'leaf',age:18,sex:'男',phone:'15677413217',dept:1},
		{id:1,name:'leaf',age:18,sex:'男',phone:'15677413217',dept:1},
		{id:1,name:'leaf',age:18,sex:'男',phone:'15677413217',dept:1},
		{id:1,name:'leaf',age:18,sex:'男',phone:'15677413217',dept:1},
		],
		page:true,
		limit:2,
		limits:[2,5,10,15,20],
		toolbar: '#toolbarHead', //开启头部工具栏，并为其绑定左侧模板
		cols:[[
		{type: 'checkbox', fixed: 'left'},
		{field: 'id', title: 'ID', width: 80},
		{field: 'name', title: '姓名', width: 80},
		{field: 'age', title: '年龄', width: 80},
		{field: 'sex', title: '性别', width: 80},
		{field: 'phone', title: '电话', width: 120},
		{field: 'dept', title: '部门', width: 80},
		{fixed: 'right', title:'操作', toolbar: '#barRow'}
		]]
	});
	table.on('toolbar(table-dept)',function(obj){
		var checkStatus = table.checkStatus('table-dept'); //idTest 即为基础参数 id 对应的值
		console.log(obj);
	});
	table.on('tool(table-dept)',function(obj){
		console.log(obj);
	});
});