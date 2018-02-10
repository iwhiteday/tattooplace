class WorkRequestStyle < ApplicationRecord
  belongs_to :work_request
  belongs_to :style
end
