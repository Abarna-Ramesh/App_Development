package com.development.mydemo.service;

import com.development.mydemo.model.Staff;
import com.development.mydemo.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StaffService {

    @Autowired
    private StaffRepository staffRepository;

    public Staff addStaff(Staff staff) {
        return staffRepository.save(staff);
    }

    public List<Staff> getAllStaff() {
        return staffRepository.findAll();
    }

    public Optional<Staff> getStaffById(Long id) {
        return staffRepository.findById(id);
    }

    public void deleteStaff(Long id) {
        staffRepository.deleteById(id);
    }

    public Staff updateStaff(Long id, Staff staff) {
        if (staffRepository.existsById(id)) {
            staff.setId(id);
            return staffRepository.save(staff);
        } else {
            return null;
        }
    }
}
