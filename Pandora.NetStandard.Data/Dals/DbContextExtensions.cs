﻿using Microsoft.AspNetCore.Identity;
using Pandora.NetStandard.Core.Identity;
using System;

namespace Pandora.NetStandard.Data.Dals
{
    public static class DbContextExtensions
    {
        public async static void SeedDb(this SchoolDbContext pDbContext)
        {
            await pDbContext.Database.EnsureCreatedAsync();
            // Add entities for DbContext instance
            pDbContext.Users.Add(new ApplicationUser
            {
                UserName = "DevAdmin",
                //PasswordHash = new PasswordHasher<ApplicationUser>().HashPassword( (user, "devadmin321"),
                Email = "lm23moreno@gmail.com",
                EmailConfirmed = true,
                FirstName = "Leonardo",
                LastName = "Moreno",
                JoinDate = DateTime.UtcNow
            });

            pDbContext.Roles.Add(new ApplicationRole
            {
                Name = "Dev",
                Description = "All features available for this role."
            });

            await pDbContext.SaveChangesAsync();
        }
    }
}