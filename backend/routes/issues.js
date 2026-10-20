[
 {
 "id": "ISS-101",
 "title": "Unable to access Wi-Fi",
 "description": "Connection fails in the teaching lab.",
 "priority": "High",
 "status": "Open",
 "createdAt": "2026-09-01T09:00:00.000Z"
 }
]
const express = require('express'); 
const issueController = require('../controllers/issues');
const router = express.Router(); 
router.get('/', issueController.listIssues); 
router.post('/', issueController.createIssue); 
router.patch('/:id/status', issueController.updateIssueStatus); 
module.exports = router;