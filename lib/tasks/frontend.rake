require 'rake'

namespace :frontend do
  desc 'Run jshint for assets/javascripts js files.'
  task jshint: :environment do
    unless Rails.env == 'production'
      Dir.glob("#{Rails.root}/app/assets/javascripts/**/*.js").each do |file|
        begin
          sh "jshint -c #{Rails.root}/.jshintrc #{file} --exclude-path #{Rails.root}/.jshintignore"
        rescue RuntimeError
          p %Q{
            Could not find JSHint.
            Run `npm install -g jshint` to install.
            JSHint skipped.
          }
        end
      end
    end
  end

  desc 'Run csslint for assets/stylesheets css files.'
  task csslint: :environment do
    unless Rails.env == 'production'
      Dir.glob("#{Rails.root}/app/assets/stylesheets/**/*.css").each do |file|
        begin
          sh "csslint -c #{Rails.root}/.csslintrc #{file}"
        rescue RuntimeError
          p %Q{
            Could not find Csslint.
            Run `npm install -g csslint` to install.
            Csslint skipped.
          }
        end
      end
    end
  end

  desc 'Run scss-lint'
  task scss_lint: :environment do
    unless Rails.env == 'production'
      Dir.glob("#{Rails.root}/app/assets/stylesheets/**/*.scss").each do |file|
        sh "scss-lint #{file}"
      end
    end
  end
end
