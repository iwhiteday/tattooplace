class CreateWorkRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :work_requests do |t|
      t.text :description, null: false
      t.integer :budget
      t.text :attachments
      t.boolean :closed_at
      t.string :cause_of_closure
      t.belongs_to :user

      t.timestamps
    end

    add_foreign_key :work_requests, :users
  end
end
