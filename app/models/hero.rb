class Hero
  include Elasticsearch::Persistence::Model
  attribute :name, String
end