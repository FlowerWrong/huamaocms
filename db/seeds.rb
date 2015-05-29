puts '====' * 20
puts 'start seeds'
time_start = Time.now

# ------------------------------------------

# ------------------------------------------

cats = [
  { name: '公司介绍', slug: '公司介绍', destroyable: false },  # id=1
  { name: '新闻中心', slug: '新闻中心', destroyable: false },  # id=2
  { name: '薰衣草堂', slug: '薰衣草堂', destroyable: false }  # id=3
]

children_of_2 = [
  { name: '公司动态', slug: '公司动态', destroyable: false },  # id=4
  { name: '活动专题', slug: '兼职', destroyable: false },  # id=5
  { name: '媒体资讯', slug: '媒体资讯', destroyable: false }  # id=6
]

root_cat_1 = Category.new(cats[0])
root_cat_1.save!

root_cat_2 = Category.new(cats[1])
root_cat_2.save!

root_cat_3 = Category.new(cats[2])
root_cat_3.save!

children_of_2.each do |cat|
  child = Category.new(cat)
  child.save!
  child.move_to_child_of root_cat_2
end

# ------------------------------------------

# ------------------------------------------

Menu.create!(
  name: '首页',
  menu_url: '/',
  menu_type: :main,
  view_template: :main,
  layout_template: :site,
  destroyable: false
)

root1 = Menu.create!(
  name: '公司介绍',
  enname: 'COMPANY INTRODUCTION',
  menu_url: '/posts/6',
  menu_type: :main,
  view_template: :main,
  layout_template: :site,
  destroyable: false
)

Menu.create!(
  name: '华贸商城',
  menu_url: '/huamao/shop',
  menu_type: :main,
  view_template: :main,
  layout_template: :site,
  destroyable: false
)

Menu.create!(
  name: '薰衣草堂',
  menu_url: '/categories/3',
  menu_type: :main,
  view_template: :main,
  layout_template: :site,
  destroyable: false
)

root2 = Menu.create!(
  name: '新闻中心',
  enname: 'NEWS CENTER',
  menu_url: '/categories/2',
  menu_type: :main,
  beautify_url: 'about',
  view_template: :main,
  layout_template: :site,
  destroyable: false
)
root3 = Menu.create!(
  name: '加入我们',
  enname: 'JOIN US',
  menu_url: '/posts/1',
  menu_type: :main,
  view_template: :main,
  layout_template: :site,
  destroyable: false
)
root4 = Menu.create!(
  name: '联系我们',
  enname: 'CONTACT US',
  menu_url: '/posts/2',
  menu_type: :main,
  view_template: :main,
  layout_template: :site,
  destroyable: false
)

# 公司简介子菜单
child0 = Menu.create!(
  name: '公司简介',
  menu_url: '/posts/6',
  menu_type: :main,
  view_template: :main,
  layout_template: :site,
  destroyable: false
)
child0.move_to_child_of root1

child1 = Menu.create!(
  name: '企业文化',
  menu_url: '/posts/3',
  menu_type: :main,
  view_template: :main,
  layout_template: :site,
  destroyable: false
)
child1.move_to_child_of root1

child2 = Menu.create!(
  name: '业务范围',
  menu_url: '/posts/4',
  menu_type: :main,
  view_template: :main,
  layout_template: :site,
  destroyable: false
)
child2.move_to_child_of root1

child3 = Menu.create!(
  name: '发展规划',
  menu_url: '/posts/5',
  menu_type: :main,
  view_template: :main,
  layout_template: :site,
  destroyable: false
)
child3.move_to_child_of root1


# 新闻中心子菜单
child1 = Menu.create!(
  name: '公司动态',
  menu_url: '/categories/4',
  menu_type: :main,
  view_template: :main,
  layout_template: :site,
  destroyable: false
)
child1.move_to_child_of root2

child2 = Menu.create!(
  name: '活动专题',
  menu_url: '/categories/5',
  menu_type: :main,
  view_template: :main,
  layout_template: :site,
  destroyable: false
)
child2.move_to_child_of root2

child3 = Menu.create!(
  name: '媒体资讯',
  menu_url: '/categories/6',
  menu_type: :main,
  view_template: :main,
  layout_template: :site,
  destroyable: false
)
child3.move_to_child_of root2
# ------------------------------------------
['加入我们', '联系我们', '企业文化', '业务范围', '发展规划', '公司简介'].each do |name|
  Post.create!(
    title: name,
    content: name,
    user_id: 1,
    author: '杨浮生',
    category_id: 1,
    publish_time: Time.now,
    destroyable: false
  )
end

1.upto(100).each do |i|
  Post.create!(
    title: "title#{i}",
    content: "content#{i}",
    user_id: 1,
    author: '杨浮生',
    category_id: (rand(5) + 1).to_i,
    publish_time: Time.now,
    destroyable: false
  )
end

# ------------------------------------------
admin_user = User.new(
  :email                 => 'admin@huamao.com',
  :password              => '12345678',
  :password_confirmation => '12345678'
)
admin_user.skip_confirmation!
admin_user.save!
admin_user.add_role :admin

# ------------------------------------------

# ------------------------------------------

Setting.create!(
  slug: '联系电话',
  config_key: 'phone',
  config_value: '13560474456',
  destroyable: false,
  editable: true
)

Setting.create!(
  slug: '联系人',
  config_key: 'contact',
  config_value: '林小姐',
  destroyable: false,
  editable: true
)

Setting.create!(
  slug: '传真',
  config_key: 'fix',
  config_value: '51000',
  destroyable: false,
  editable: true
)

Setting.create!(
  slug: '电子邮箱',
  config_key: 'company_email',
  config_value: 'lin@gmail.com',
  destroyable: false,
  editable: true
)

Setting.create!(
  slug: '公司网址',
  config_key: 'company_url',
  config_value: 'huamao.com',
  destroyable: false,
  editable: true
)

Setting.create!(
  slug: '公司地址',
  config_key: 'company_address',
  config_value: '广州市番禺区五洲城B座518',
  destroyable: false,
  editable: true
)
# ------------------------------------------

# ------------------------------------------

['伊犁华贸农业', '伊犁河谷影视', '伊犁河谷旅游', '伊犁河谷薰衣草苗木', '伊犁河谷生物', '伊犁河谷万亩庄园'].each do |i|
  FriendLink.create!(
    name: i,
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
