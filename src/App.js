import React from 'react'
import './App.css'

function App() {
	return (
		<div className='App'>
			<ul>
				<li>
					Clone the repo and go to develop branch. Using -- git checkout develop
				</li>
				<li>
					First git checkout -b 'your branchname' ---- ex: feature/loginform
				</li>
				<li>All the work</li>
				<li>Add files using git add .</li>
				<li>
					commit using git commit -m "details about the work" -- ex: signup
					button and input added
				</li>
				<li>
					push the git - git push -u origin 'your branchname' [for the first
					time when creating the branch]
				</li>
				<li>push the git - git push [after every changes]</li>
			</ul>
		</div>
	)
}

export default App
