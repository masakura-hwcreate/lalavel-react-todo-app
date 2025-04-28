function Create() {
    
    return (
        <div>
            <div>
                <label htmlFor="is_finished">期限</label>
                <input type="text" id="deadline" name="deadline" />
            </div>
            <div>
                <label htmlFor="is_finished">todo名</label>
                <input type="text" id="content" name="content" />
            </div>
            <div>
                <label htmlFor="is_finished">状態</label>
                <select name="is_finished">
                    <option value="0">未完了</option>
                    <option value="1">完了</option>
                </select>
            </div>
        </div>
        )
    
}
export default Create;