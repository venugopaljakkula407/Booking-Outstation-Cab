import { exec } from 'child_process';
 
exec('git add .', (err) => {
  if (err) {
    console.log('Git add failed');
    return;
  }
 
  console.log('Files added');
 
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