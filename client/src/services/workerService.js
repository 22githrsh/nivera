import * as api from "../api/workerApi"


// ==================== GET ====================

export const getMyProfileService = async () => {
  const res = await api.getProfile()
  return res.data
}

export const getProfileByUsernameService = async (username) => {
  const res = await api.getProfileByUsername(username)
  return res.data
}


// ==================== CREATE ====================

export const createProfileService = async (data) => {
  const res = await api.createProfile(data)
  return res.data
}


// ==================== HEADLINE ====================

export const updateHeadlineService = async (data) => {
  const res = await api.updateHeadline(data)
  return res.data
}


// ==================== SKILLS ====================

export const updateSkillsService = async (data) => {
  const res = await api.updateSkills(data)
  return res.data
}


// ==================== IT SKILLS ====================

export const addITSkillService = async (data) => {
  const res = await api.addITSkill(data)
  return res.data
}

export const updateITSkillService = async (id, data) => {
  const res = await api.updateITSkill(id, data)
  return res.data
}

export const deleteITSkillService = async (id) => {
  const res = await api.deleteITSkill(id)
  return res.data
}


// ==================== EMPLOYMENT ====================

export const addEmploymentService = async (data) => {
  const res = await api.addEmployment(data)
  return res.data
}

export const updateEmploymentService = async (id, data) => {
  const res = await api.updateEmployment(id, data)
  return res.data
}

export const deleteEmploymentService = async (id) => {
  const res = await api.deleteEmployment(id)
  return res.data
}


// ==================== EDUCATION ====================

export const addEducationService = async (data) => {
  const res = await api.addEducation(data)
  return res.data
}

export const updateEducationService = async (id, data) => {
  const res = await api.updateEducation(id, data)
  return res.data
}

export const deleteEducationService = async (id) => {
  const res = await api.deleteEducation(id)
  return res.data
}


// ==================== PROJECT ====================

export const addProjectService = async (data) => {
  const res = await api.addProject(data)
  return res.data
}

export const updateProjectService = async (id, data) => {
  const res = await api.updateProject(id, data)
  return res.data
}

export const deleteProjectService = async (id) => {
  const res = await api.deleteProject(id)
  return res.data
}


// ==================== SUMMARY ====================

export const updateSummaryService = async (data) => {
  const res = await api.updateSummary(data)
  return res.data
}


// ==================== CAREER ====================

export const updateCareerService = async (data) => {
  const res = await api.updateCareer(data)
  return res.data
}


// ==================== PERSONAL ====================

export const updatePersonalService = async (data) => {
  const res = await api.updatePersonal(data)
  return res.data
}


// ==================== DIVERSITY ====================

export const updateDiversityService = async (data) => {
  const res = await api.updateDiversity(data)
  return res.data
}


// ==================== UPLOAD ====================

export const uploadResumeService = async (formData) => {
  const res = await api.uploadResume(formData)
  return res.data
}

export const uploadPhotoService = async (formData) => {
  const res = await api.uploadPhoto(formData)
  return res.data
}