# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150526082618) do

  create_table "categories", force: :cascade do |t|
    t.string   "name",           limit: 255
    t.string   "slug",           limit: 255
    t.integer  "parent_id",      limit: 4
    t.integer  "lft",            limit: 4,               null: false
    t.integer  "rgt",            limit: 4,               null: false
    t.integer  "depth",          limit: 4,   default: 0, null: false
    t.integer  "children_count", limit: 4,   default: 0, null: false
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
  end

  add_index "categories", ["lft"], name: "index_categories_on_lft", using: :btree
  add_index "categories", ["parent_id"], name: "index_categories_on_parent_id", using: :btree
  add_index "categories", ["rgt"], name: "index_categories_on_rgt", using: :btree

  create_table "friend_links", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.string   "f_url",      limit: 255
    t.string   "f_logo",     limit: 255
    t.integer  "f_group_id", limit: 4
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "images", force: :cascade do |t|
    t.integer  "imageable_id",    limit: 4
    t.string   "imageable_type",  limit: 255
    t.string   "image_mime_type", limit: 255
    t.string   "image_name",      limit: 255
    t.string   "image_size",      limit: 255
    t.string   "image_width",     limit: 255
    t.string   "image_height",    limit: 255
    t.string   "image_uid",       limit: 255
    t.string   "image_ext",       limit: 255
    t.string   "image_alt",       limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "images", ["imageable_id", "imageable_type"], name: "index_images_on_imageable_id_and_imageable_type", using: :btree

  create_table "menus", force: :cascade do |t|
    t.string   "name",           limit: 255
    t.string   "menu_type",      limit: 255
    t.string   "menu_url",       limit: 255
    t.integer  "menu_order",     limit: 4
    t.integer  "parent_id",      limit: 4
    t.integer  "lft",            limit: 4,                  null: false
    t.integer  "rgt",            limit: 4,                  null: false
    t.integer  "depth",          limit: 4,   default: 0,    null: false
    t.integer  "children_count", limit: 4,   default: 0,    null: false
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.string   "beautify_url",   limit: 255
    t.boolean  "editable",       limit: 1,   default: true
    t.boolean  "destroyable",    limit: 1,   default: true
    t.string   "temlate",        limit: 255
  end

  add_index "menus", ["lft"], name: "index_menus_on_lft", using: :btree
  add_index "menus", ["parent_id"], name: "index_menus_on_parent_id", using: :btree
  add_index "menus", ["rgt"], name: "index_menus_on_rgt", using: :btree

  create_table "posts", force: :cascade do |t|
    t.string   "title",        limit: 255
    t.text     "summary",      limit: 65535
    t.text     "content",      limit: 65535
    t.integer  "user_id",      limit: 4
    t.string   "author",       limit: 255
    t.string   "img",          limit: 255
    t.datetime "publish_time"
    t.boolean  "stick",        limit: 1,     default: false
    t.boolean  "can_comment",  limit: 1,     default: true
    t.boolean  "is_recommend", limit: 1,     default: false
    t.boolean  "is_published", limit: 1,     default: true
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
    t.integer  "category_id",  limit: 4
  end

  create_table "roles", force: :cascade do |t|
    t.string   "name",          limit: 255
    t.integer  "resource_id",   limit: 4
    t.string   "resource_type", limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "roles", ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id", using: :btree
  add_index "roles", ["name"], name: "index_roles_on_name", using: :btree

  create_table "settings", force: :cascade do |t|
    t.string   "slug",         limit: 255
    t.string   "config_key",   limit: 255
    t.string   "config_value", limit: 255
    t.boolean  "destroyable",  limit: 1,   default: false
    t.boolean  "editable",     limit: 1,   default: false
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id",        limit: 4
    t.integer  "taggable_id",   limit: 4
    t.string   "taggable_type", limit: 255
    t.integer  "tagger_id",     limit: 4
    t.string   "tagger_type",   limit: 255
    t.string   "context",       limit: 128
    t.datetime "created_at"
  end

  add_index "taggings", ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true, using: :btree
  add_index "taggings", ["taggable_id", "taggable_type", "context"], name: "index_taggings_on_taggable_id_and_taggable_type_and_context", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string  "name",           limit: 255
    t.integer "taggings_count", limit: 4,   default: 0
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.string   "confirmation_token",     limit: 255
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email",      limit: 255
    t.integer  "failed_attempts",        limit: 4,   default: 0,  null: false
    t.string   "unlock_token",           limit: 255
    t.datetime "locked_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["unlock_token"], name: "index_users_on_unlock_token", unique: true, using: :btree

  create_table "users_roles", id: false, force: :cascade do |t|
    t.integer "user_id", limit: 4
    t.integer "role_id", limit: 4
  end

  add_index "users_roles", ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id", using: :btree

end
