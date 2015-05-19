# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

# backend js and css
Rails.application.config.assets.precompile += %w( validation.js )
Rails.application.config.assets.precompile += %w( table.js )
Rails.application.config.assets.precompile += %w( table.css )
Rails.application.config.assets.precompile += %w( sortable.js )
Rails.application.config.assets.precompile += %w( sortable.css )
Rails.application.config.assets.precompile += %w( tags.js )
Rails.application.config.assets.precompile += %w( tags.css )


# site js and css
Rails.application.config.assets.precompile += %w( site.js )
Rails.application.config.assets.precompile += %w( site.css )


# devise js and css
Rails.application.config.assets.precompile += %w( devise.js )
Rails.application.config.assets.precompile += %w( devise.css )
