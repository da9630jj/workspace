// 회사 정보
public class Company {
    private String companyName;
    private ContactInfo contactInfo;

    public Company(String companyName, ContactInfo contactInfo) {
        this.companyName = companyName;
        this.contactInfo = contactInfo;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public ContactInfo getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(ContactInfo contactInfo) {
        this.contactInfo = contactInfo;
    }
}
