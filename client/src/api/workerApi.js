import axiosInstance from "../utils/axiosInstance"

// ==================== GET ====================

export const getProfile = () =>
  axiosInstance.get("/worker/me")

export const getProfileByUsername = (username) =>
  axiosInstance.get(`/worker/profile/${username}`)


// ==================== CREATE ====================

export const createProfile = (data) =>
  axiosInstance.post("/worker/create", data)


// ==================== HEADLINE ====================

export const updateHeadline = (data) =>
  axiosInstance.put("/worker/headline", data)


// ==================== SKILLS ====================

export const updateSkills = (data) =>
  axiosInstance.put("/worker/skills", data)


// ==================== IT SKILLS ====================

export const addITSkill = (data) =>
  axiosInstance.post("/worker/it-skill", data)

export const updateITSkill = (id, data) =>
  axiosInstance.put(`/worker/it-skill/${id}`, data)

export const deleteITSkill = (id) =>
  axiosInstance.delete(`/worker/it-skill/${id}`)


// ==================== EMPLOYMENT ====================

export const addEmployment = (data) =>
  axiosInstance.post("/worker/employment", data)

export const updateEmployment = (id, data) =>
  axiosInstance.put(`/worker/employment/${id}`, data)

export const deleteEmployment = (id) =>
  axiosInstance.delete(`/worker/employment/${id}`)


// ==================== EDUCATION ====================

export const addEducation = (data) =>
  axiosInstance.post("/worker/education", data)

export const updateEducation = (id, data) =>
  axiosInstance.put(`/worker/education/${id}`, data)

export const deleteEducation = (id) =>
  axiosInstance.delete(`/worker/education/${id}`)


// ==================== PROJECT ====================

export const addProject = (data) =>
  axiosInstance.post("/worker/project", data)

export const updateProject = (id, data) =>
  axiosInstance.put(`/worker/project/${id}`, data)

export const deleteProject = (id) =>
  axiosInstance.delete(`/worker/project/${id}`)


// ==================== SUMMARY ====================

export const updateSummary = (data) =>
  axiosInstance.put("/worker/summary", data)


// ==================== CAREER ====================

export const updateCareer = (data) =>
  axiosInstance.put("/worker/career", data)


// ==================== PERSONAL ====================

export const updatePersonal = (data) =>
  axiosInstance.put("/worker/personal", data)


// ==================== DIVERSITY ====================

export const updateDiversity = (data) =>
  axiosInstance.put("/worker/diversity", data)


// ==================== UPLOAD ====================

export const uploadResume = (formData) =>
  axiosInstance.post("/worker/upload-resume", formData)

export const uploadPhoto = (formData) =>
  axiosInstance.post("/worker/upload-photo", formData)