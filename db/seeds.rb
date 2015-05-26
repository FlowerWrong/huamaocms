puts '====' * 20
puts 'start seeds'
time_start = Time.now

# ------------------------------------------
root1 = Menu.create!(
  name: '公司介绍',
  menu_url: '/categories/1',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)
root2 = Menu.create!(
  name: '新闻中心',
  menu_url: '/categories/2',
  menu_type: :main,
  beautify_url: 'about',
  view_template: :main,
  layout_template: :site
)
root3 = Menu.create!(
  name: '加入我们',
  menu_url: '/posts/1',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)
root4 = Menu.create!(
  name: '联系我们',
  menu_url: '/posts/2',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)

# 公司简介子菜单
child1 = Menu.create!(
  name: '企业文化',
  menu_url: '/posts/1-1',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)
child1.move_to_child_of root1

child2 = Menu.create!(
  name: '业务范围',
  menu_url: '/posts/1-2',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)
child2.move_to_child_of root1

child3 = Menu.create!(
  name: '发展规划',
  menu_url: '/posts/1-3',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)
child3.move_to_child_of root1


# 新闻中心子菜单
child1 = Menu.create!(
  name: '公司动态',
  menu_url: '/categories/1-1',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)
child1.move_to_child_of root2

child2 = Menu.create!(
  name: '活动专题',
  menu_url: '/categories/1-2',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)
child2.move_to_child_of root2

child3 = Menu.create!(
  name: '媒体资讯',
  menu_url: '/categories/1-3',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)
child3.move_to_child_of root2
# ------------------------------------------

# ------------------------------------------
admin_user = User.new(
  :email                 => 'admin@thecampus.cc',
  :password              => '12345678',
  :password_confirmation => '12345678'
)
admin_user.skip_confirmation!
admin_user.save!
admin_user.add_role :admin

normal_user = User.new(
  email: 'normal@thecampus.cc',
  password: '12345678',
  password_confirmation: '12345678'
)
normal_user.skip_confirmation!
normal_user.save!
normal_user.add_role :normal

# ------------------------------------------

# ------------------------------------------

cats = [
  {name: '公司介绍', slug: '公司介绍'},
  {name: '新闻中心', slug: '新闻中心'}
]

children_of_1 = [
  {name: '企业文化', slug: '企业文化'},
  {name: '业务范围', slug: '业务范围'},
  {name: '发展规划', slug: '发展规划'}
]

children_of_2 = [
  {name: '公司动态', slug: '公司动态'},
  {name: '活动专题', slug: '兼职'},
  {name: '媒体资讯', slug: '媒体资讯'}
]

root_cat_1 = Category.new(cats[0])
root_cat_1.save!

root_cat_2 = Category.new(cats[1])
root_cat_2.save!

children_of_1.each do |cat|
  child = Category.new(cat)
  child.save!
  child.move_to_child_of root_cat_1
end

children_of_2.each do |cat|
  child = Category.new(cat)
  child.save!
  child.move_to_child_of root_cat_2
end

# ------------------------------------------

# ------------------------------------------

Setting.create!(
  slug: 'logo',
  config_key: 'logo',
  config_value: '/angle/app/img/logo.png',
  destroyable: false,
  editable: true
)
# ------------------------------------------


# ------------------------------------------

1.upto(50).each do |i|
  Post.create!(
    title: "title#{i}",
    content: "content#{i}",
    user_id: 1,
    author: '杨浮生',
    category_id: (rand(10) + 1),
    publish_time: Time.now
  )
end

# ------------------------------------------

# ------------------------------------------

1.upto(5).each do |i|
  FriendLink.create!(
    name: "FriendLink#{i}",
    f_url: "/pages/#{i}",
    f_logo: "/pages/#{i}.png",
    f_group_id: 1
  )
end

# ------------------------------------------
time_end = Time.now
time = time_end - time_start
puts time.to_s
puts 'end seeds'
puts '====' * 20
