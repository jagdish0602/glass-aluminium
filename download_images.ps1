$images = @(
    @{ url="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=2200&fm=webp&fit=crop"; path="assets\images\home\home-hero.webp" },
    @{ url="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\home\home-glass-systems.webp" },
    @{ url="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\home\home-aluminium-systems.webp" },
    @{ url="https://images.unsplash.com/photo-1541888045558-f9b18fc30f57?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\home\home-doors-windows.webp" },
    @{ url="https://images.unsplash.com/photo-1558451871-3315a995e803?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\home\home-curtain-wall.webp" },
    @{ url="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=85&w=2200&fm=webp&fit=crop"; path="assets\images\home\home-featured-project.webp" },
    @{ url="https://images.unsplash.com/photo-1581093450021-4a73f1082c5f?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\home\engineering-detail.webp" },
    @{ url="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=85&w=2200&fm=webp&fit=crop"; path="assets\images\home\home-cta.webp" },
    
    @{ url="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=85&w=2200&fm=webp&fit=crop"; path="assets\images\about\about-hero.webp" },
    @{ url="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=2200&fm=webp&fit=crop"; path="assets\images\about\about-craftsmanship.webp" },
    @{ url="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\about\about-workshop.webp" },
    @{ url="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\about\about-installation.webp" },
    
    @{ url="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=85&w=2200&fm=webp&fit=crop"; path="assets\images\solutions\solutions-hero.webp" },
    @{ url="https://images.unsplash.com/photo-1497366216548-37526070297c?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\solutions\solutions-glass.webp" },
    @{ url="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\solutions\solutions-aluminium.webp" },
    @{ url="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=85&w=1200&fm=webp&fit=crop"; path="assets\images\solutions\solutions-doors.webp" },
    @{ url="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1200&fm=webp&fit=crop"; path="assets\images\solutions\solutions-doors-casement.webp" },
    @{ url="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1200&fm=webp&fit=crop"; path="assets\images\solutions\solutions-doors-lift.webp" },
    @{ url="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=85&w=2200&fm=webp&fit=crop"; path="assets\images\solutions\solutions-curtain-wall.webp" },
    
    @{ url="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=85&w=2200&fm=webp&fit=crop"; path="assets\images\projects\projects-hero.webp" },
    @{ url="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=2200&fm=webp&fit=crop"; path="assets\images\projects\projects-featured.webp" },
    @{ url="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\projects\project-01.webp" },
    @{ url="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\projects\project-02.webp" },
    @{ url="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\projects\project-03.webp" },
    @{ url="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\projects\project-04.webp" },
    
    @{ url="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=2200&fm=webp&fit=crop"; path="assets\images\contact\contact-hero.webp" },
    @{ url="https://images.unsplash.com/photo-1558451871-3315a995e803?q=85&w=1500&fm=webp&fit=crop"; path="assets\images\contact\contact-location.webp" }
)

foreach ($img in $images) {
    Write-Host "Downloading $($img.path)..."
    Invoke-WebRequest -Uri $img.url -OutFile $img.path
}
