RSpec.configure do |config|
  # Explicitly enable both syntaxes
  config.expect_with :rspec do |c|
    c.syntax = [:should, :expect]
  end
end
