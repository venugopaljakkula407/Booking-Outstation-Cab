//importing exec function from node.js built-in module called child_process
import { exec } from 'child_process';
 
// exes allows typescript code to run terminal commands

//adds all files into github
exec('git add .', (err) => {
  if (err) {
    console.log('Git add failed');
    return;
  }
 
  console.log('Files added');
 
  // It creates a commit in git
  exec('git commit -m "Updated framework"', (err) => {
    if (err) {
      console.log('Commit failed');
      return;
    }
 
    console.log('Commit successful');
 
    exec('git push', (err) => {
      if (err) {
        console.log('Push failed');
        return;
      }
 
      console.log('Code pushed successfully');
    });
  });
});