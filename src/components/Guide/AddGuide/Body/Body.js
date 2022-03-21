import { useState } from 'react';
import CodeEditor from './Code/CodeEditor';
import Language from './Code/Language';
import Guide from './Reference/Guide';

export default function GuideBody() {
	const [newBodyList, setNewBodyList] = useState([{ newBody: '' }]);

	const handleNewBodyChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...newBodyList];
		list[index][name] = value;
		setNewBodyList(list);
	};

	const handleNewBodyRemove = (index) => {
		const list = [...newBodyList];
		list.splice(index, 1);
		setNewBodyList(list);
	};

	const handleNewBodyAdd = () => {
		setNewBodyList([...newBodyList, { newBody: '' }]);
	};

	return (
		<div style={{ border: '1rem solid green' }} className="form-field">
			{newBodyList.map((singleNewBody, index) => (
				<div key={index} className="newBody">
					<div className="addNewBody">
						<input
							placeholder="File Name"
							name="newBody"
							type="text"
							id="newBody"
							value={singleNewBody.newBody}
							onChange={(e) => handleNewBodyChange(e, index)}
							required
						/>
						<Language>
							<CodeEditor />
						</Language>
						<Guide />

						{newBodyList.length - 1 === index && (
							<button
								type="button"
								onClick={handleNewBodyAdd}
								className="add-btn"
							>
								<span>Add</span>
							</button>
						)}
					</div>

					<div className="removeNewBody">
						{newBodyList.length !== 1 && (
							<button
								type="button"
								onClick={() => handleNewBodyRemove(index)}
								className="remove-btn"
							>
								<span>Remove</span>
							</button>
						)}
					</div>
					<div></div>
				</div>
			))}
		</div>
	);
}
