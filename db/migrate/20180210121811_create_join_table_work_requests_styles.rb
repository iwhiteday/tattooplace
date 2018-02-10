class CreateJoinTableWorkRequestsStyles < ActiveRecord::Migration[5.1]
  def change
    create_join_table :work_requests, :styles
  end
end
