"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  Avatar,
  Grid,
} from "@mui/material";
import { Person, SupportAgent } from "@mui/icons-material";

const ReplyTicket = ({ selectedTicket, onAddReply, onClose }) => {
  const [replyText, setReplyText] = useState("");
  const [replyType, setReplyType] = useState("user"); // "user" or "support"

  if (!selectedTicket) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem 0" }}>
        <Typography>No ticket selected</Typography>
      </Box>
    );
  }

  const handleAddReply = () => {
    if (replyText.trim()) {
      onAddReply && onAddReply(replyText, replyType);
      setReplyText("");
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem 0" }}>
      {/* Ticket Header */}
      <Box sx={{ p: 2, border: "1px solid #e0e0e0", borderRadius: 1, backgroundColor: "#fafafa" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "#333" }}>
          Ticket #{selectedTicket.code}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 500, color: "#555" }}>
          {selectedTicket.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
          Created by: {selectedTicket.employee} | Priority: {selectedTicket.priority} | Status: {selectedTicket.status}
        </Typography>
      </Box>

      {/* Conversation Thread */}
      <Box sx={{ maxHeight: "400px", overflowY: "auto", border: "1px solid #e0e0e0", borderRadius: 1, p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#333" }}>
          Conversation
        </Typography>

        {/* Initial Ticket Description */}
        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <Avatar sx={{ backgroundColor: "#666", width: 32, height: 32 }}>
            <Person sx={{ fontSize: 18 }} />
          </Avatar>
          <Box sx={{ flex: 1, p: 2, border: "1px solid #e0e0e0", borderRadius: 1, backgroundColor: "#f9f9f9" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#333" }}>
                {selectedTicket.employee}
              </Typography>
              <Typography variant="caption" sx={{ color: "#666" }}>
                {selectedTicket.createdDate}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#555" }}>{selectedTicket.description}</Typography>
          </Box>
        </Box>

        {/* Replies */}
        {selectedTicket.replies && selectedTicket.replies.length > 0 ? (
          selectedTicket.replies.map((reply, index) => (
            <Box key={index} sx={{ display: "flex", gap: 1, mb: 2, justifyContent: reply.type === "support" ? "flex-end" : "flex-start" }}>
              {reply.type === "user" && (
                <Avatar sx={{ backgroundColor: "#666", width: 32, height: 32 }}>
                  <Person sx={{ fontSize: 18 }} />
                </Avatar>
              )}
              <Box 
                sx={{ 
                  p: 2, 
                  flex: 1, 
                  maxWidth: "80%",
                  border: "1px solid #e0e0e0",
                  borderRadius: 1,
                  backgroundColor: reply.type === "support" ? "#f0f0f0" : "#f9f9f9"
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#333" }}>
                    {reply.author}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    {formatTimestamp(reply.timestamp)}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#555" }}>{reply.message}</Typography>
              </Box>
              {reply.type === "support" && (
                <Avatar sx={{ backgroundColor: "#666", width: 32, height: 32 }}>
                  <SupportAgent sx={{ fontSize: 18 }} />
                </Avatar>
              )}
            </Box>
          ))
        ) : (
          <Typography variant="body2" sx={{ color: "#666", textAlign: "center", py: 2 }}>
            No replies yet. Start the conversation below.
          </Typography>
        )}
      </Box>

      {/* Add Reply Section */}
      <Box sx={{ p: 2, border: "1px solid #e0e0e0", borderRadius: 1, backgroundColor: "#fafafa" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#333" }}>
          Add Reply
        </Typography>
        
        <Grid container spacing={2}>
          <Grid size={{xs:12}}>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Type your reply here..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#fff"
                }
              }}
            />
          </Grid>
          <Grid size={{xs:12, sm:6}}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <button
                className={`hrms-btn ${replyType === "user" ? "hrms-btn-primary" : "hrms-btn-secondary"}`}
                onClick={() => setReplyType("user")}
                style={{ fontSize: "0.875rem", padding: "0.5rem 1rem" }}
              >
                User Reply
              </button>
              <button
                className={`hrms-btn ${replyType === "support" ? "hrms-btn-primary" : "hrms-btn-secondary"}`}
                onClick={() => setReplyType("support")}
                style={{ fontSize: "0.875rem", padding: "0.5rem 1rem" }}
              >
                Support Reply
              </button>
            </Box>
          </Grid>
          <Grid size={{xs:12, sm:6}}>
            <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
              <button
                className="hrms-btn hrms-btn-secondary"
                onClick={() => setReplyText("")}
                style={{ fontSize: "0.875rem", padding: "0.5rem 1rem" }}
              >
                Clear
              </button>
              <button
                className="hrms-btn hrms-btn-primary"
                onClick={handleAddReply}
                disabled={!replyText.trim()}
                style={{ 
                  fontSize: "0.875rem", 
                  padding: "0.5rem 1rem",
                  opacity: !replyText.trim() ? 0.6 : 1
                }}
              >
                Send Reply
              </button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ReplyTicket;
