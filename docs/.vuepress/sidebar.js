const sidebar = [
	['/', '首页'],
	{
		title: 'Git',
		collapsable: true,
		children: [
			['/git/install', '安装'],
			['/git/command', '常用命令'],
			['/git/command-other', '其它常用命令']
		]
	},
	{
		title: 'Docker',
		collapsable: true,
		children: [
			['/docker/install', '安装'],
			['/docker/command', '常用命令'],
			['/docker/compose', 'Compose']
		]
	},
	{
		title: 'Composer',
		collapsable: true,
		children: [
			['/composer/install', '安装'],
			['/composer/command', '常用命令']
		]
	},
	{
		title: 'Nginx',
		collapsable: true,
		children: [
			['/nginx/project-config', '项目配置']
		]
	}
]
module.exports = {sidebar};