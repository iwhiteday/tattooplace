class WorkRequest < ApplicationRecord
  has_many :work_requests_styles
  has_many :styles, through: :work_requests_styles

  mount_uploaders :attachments, AttachmentsUploader
end
