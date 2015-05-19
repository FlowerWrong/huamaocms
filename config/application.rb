require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

Dotenv::Railtie.load

module Huamaocms
  class Application < Rails::Application

    config.generators do |g|
      g.orm :active_record
      g.template_engine :erb
      # g.test_framework :test_unit, fixture: true
      # g.fixture_replacement :factory_girl
      g.test_framework :rspec,
        fixtures: true,
        view_specs: false,
        helper_specs: true,
        routing_specs: false,
        controller_specs: true,
        model_specs: true,
        request_specs: false
      g.fixture_replacement :factory_girl, dir: 'spec/factories'
      g.integration_tool :rspec
      g.stylesheets false
      g.javascripts false
      g.jbuilder false
      g.helper false
    end

    config.i18n.available_locales = [:'zh-CN', :zh]
    config.i18n.default_locale = :'zh-CN'

    config.active_record.default_timezone = :local
    config.time_zone = 'Beijing'
    config.encoding = 'utf-8'

    # Do not swallow errors in after_commit/after_rollback callbacks.
    config.active_record.raise_in_transactional_callbacks = true

    config.assets.paths << Rails.root.join('vendor', 'assets', 'components')
    # config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
    # config.assets.paths << Rails.root.join('app', 'assets', 'i18n')

    config.autoload_paths << Rails.root.join('lib', 'tasks')
  end
end
