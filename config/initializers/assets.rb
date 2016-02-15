# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# Example: Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w( mobile.js )
Rails.application.config.assets.precompile += %w( mobile.css )
Rails.application.config.assets.precompile += %w( demoDesktop.js )
Rails.application.config.assets.precompile += %w( demoMobile.js )
